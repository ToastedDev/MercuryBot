/** @type {import('../../utils/types').Command} */
export default {
  name: "ping",
  description: "Pings the bot.",
  run: async ({ client, message }) => {
    const res = await message.channel.send("Pinging...");

    const ping = res.createdTimestamp - message.createdTimestamp;
    res.edit(`Heartbeat: **${ping}ms**\nLatency: **${client.ws.ping}ms**`);
  },
};
