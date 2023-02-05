import { EmbedBuilder } from "discord.js";

/** @param {string} str */
function escapeRegex(str) {
  try {
    return str.replace(/[.*+?^${}()|[\]\\]/g, `\\$&`);
  } catch (e) {
    console.log(e);
  }
}

/**
 * @param {import('../structures/BotClient').BotClient} client
 * @param {import('discord.js').Message} message
 */
export default async (client, message) => {
  if (!message.guild || message.author.bot) return;

  client.db.ensure(message.guild.id, {
    prefix: client.config.prefix,
  });

  const prefix = client.db.get(message.guild.id, "prefix");
  const prefixRegex = new RegExp(
    `^(<@!?${client.user.id}>|${escapeRegex(prefix)})\\s*`
  );
  if (!prefixRegex.test(message.content)) return;

  const [, mPrefix] = message.content.match(prefixRegex);
  const [cmd, ...args] = message.content
    .slice(mPrefix.length)
    .trim()
    .split(/ +/);

  if (cmd.length === 0 && mPrefix.includes(client.user.id))
    return message.reply({
      embeds: [
        new EmbedBuilder()
          .setDescription(`My prefix here is \`${prefix}\`.`)
          .setColor(client.config.color),
      ],
    });

  const command =
    client.commands.get(cmd.toLowerCase()) ||
    client.commands.find((c) => c.aliases?.includes(cmd.toLowerCase()));
  if (!command) return;

  try {
    await command.run({ client, message, args, prefix });
  } catch (err) {
    console.error(err);
    message.channel.send("Uh oh, we had an oopsie! Please try again.");
  }
};
