/**
 * @param {import('../structures/BotClient').BotClient} client
 * @param {import('discord.js').Interaction} interaction
 */
export default async (client, interaction) => {
  if (!interaction.isChatInputCommand()) return;

  client.db.ensure(interaction.guild.id, {
    prefix: client.config.prefix,
  });

  const command = client.slashCommands.get(interaction.commandName);
  if (!command) return;

  interaction.member = interaction.guild.members.cache.get(interaction.user.id);

  try {
    await command.run({
      client,
      interaction,
      prefix: client.db.get(interaction.guild.id, "prefix"),
    });
  } catch (err) {
    console.error(err);

    const options = {
      content: "Uh oh, we had an oopsie! Please try again.",
      ephemeral: true,
    };
    if (interaction.replied || interaction.deferred)
      interaction.followUp(options);
    else interaction.reply(options);
  }
};
