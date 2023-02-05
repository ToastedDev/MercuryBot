import { EmbedBuilder, PermissionsBitField } from "discord.js";
import fs from "fs";

/** @param {string} str */
function capitalize(str) {
  return str[0].toUpperCase() + str.toLowerCase().slice(1);
}

/** @type {import('../../utils/types').Command} */
export default {
  name: "help",
  description: "View my commands.",
  run: async ({ client, message, args, prefix }) => {
    const cmd = args[0]?.toLowerCase();
    if (cmd) {
      const command =
        client.commands.get(cmd) ||
        client.commands.find((c) => c.aliases?.includes(cmd));
      if (!command) return message.channel.send("❌ Unknown command.");

      /** @type {string[]} */
      let description = [];
      const embed = new EmbedBuilder()
        .setTitle(prefix + command.name)
        .setColor(client.config.color);

      if (command.description)
        description.push(`**Description**: ${command.description}`);
      if (command.aliases)
        description.push(
          `**Aliases**: ${command.aliases.map((v) => `\`${v}\``).join(", ")}`
        );
      if (command.usage) {
        description.push(
          `**Usage**: ${prefix}${command.name} ${command.usage}`
        );
        embed.setFooter({
          text: "<> = required, [] = optional",
        });
      }
      if (command.userPermissions)
        description.push(
          `**Requried permissions**: ${new PermissionsBitField(
            command.userPermissions
          )
            .toArray()
            .map((x) => `\`${x}\``)
            .join(", ")}`
        );

      message.channel.send({
        embeds: [embed.setDescription(description.join("\n"))],
      });
    } else {
      const categories = [];

      for (const dir of fs.readdirSync("./commands")) {
        const commands = fs
          .readdirSync(`./commands/${dir}`)
          .filter((file) => file.endsWith("js"));

        const cmds = await Promise.all(
          commands.map(async (command) => {
            let file = await import(`../../commands/${dir}/${command}`).then(
              (x) => x?.default
            );
            if (!file?.name) return;

            return `\`${file.name}\``;
          })
        ).then((x) => x.filter(Boolean).sort((a, b) => a.localeCompare(b)));

        if (!cmds) return;

        categories.push({
          name: `${capitalize(dir)} [${cmds.length}]`,
          value: cmds.join(", "),
        });
      }

      message.channel.send({
        embeds: [
          new EmbedBuilder()
            .setAuthor({
              name: client.user.username,
              iconURL: client.user.displayAvatarURL(),
            })
            .setFields(categories)
            .setColor(client.config.color),
        ],
      });
    }
  },
};
