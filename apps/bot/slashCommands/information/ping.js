/** @type {import('../../utils/types').SlashCommand} */
export default {
  name: "ping",
  description: "Pings the bot.",
  run: async ({ client, interaction }) => {
    const res = await interaction.deferReply({
      ephemeral: true,
      fetchReply: true,
    });

    const ping = res.createdTimestamp - interaction.createdTimestamp;
    interaction.followUp(
      `Heartbeat: **${ping}ms**\nLatency: **${client.ws.ping}ms**`
    );
  },
};
