import fs from "fs";

/** @type {(client: import("../structures/BotClient").BotClient) => any} */
export default (client) => {
  /** @type {import("discord.js").ChatInputApplicationCommandData[]} */
  const commands = [];
  fs.readdirSync("./slashCommands").forEach(async (dir) => {
    const commandFiles = fs
      .readdirSync(`./slashCommands/${dir}`)
      .filter((file) => file.endsWith("js"));

    for (const file of commandFiles) {
      const command = await import(`../slashCommands/${dir}/${file}`)
        .then((x) => x.default)
        .catch(() => null);
      if (!command?.name || !command?.description || !command?.run) continue;

      client.slashCommands.set(command.name, command);
      commands.push({ ...command, dmPermission: false });
    }
  });

  client.on("ready", async () => {
    if (client.config.guildId && client.config.guildId.length) {
      const guild = client.guilds.cache.get(client.config.guildId);
      if (!guild)
        throw new SyntaxError(
          `No guild exists with ID ${client.config.guildId}.`
        );

      guild.commands.set(commands);
      console.log(`Registered commands in ${guild.name}.`);
    } else {
      client.application?.commands.set(commands);
      console.log("Registered commands globally.");
    }
  });
};
