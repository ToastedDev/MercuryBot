import { EmbedBuilder } from "discord.js";

/** @type {import('../../utils/types').Command} */
export default {
  name: "prefix",
  description: "Change the prefix for your server.",
  userPermissions: ["ManageGuild"],
  run: ({ client, message, args }) => {
    if (!args[0])
      return message.channel.send("❌ You must specify a new prefix.");
    if (args[0].length > 5)
      return message.channel.send(
        "❌ The prefix must be less than 5 characters."
      );

    client.db.set(message.guild.id, args[0], "prefix");
    message.channel.send({
      embeds: [
        new EmbedBuilder()
          .setDescription(`Changed prefix to \`${args[0]}\`.`)
          .setColor("Green"),
      ],
    });
  },
};
