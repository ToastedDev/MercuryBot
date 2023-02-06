import { EmbedBuilder } from "discord.js";
import { getRandomInteger } from "../../functions.js";

/** @type {import('../../utils/types').Command} */
export default {
  name: "rate",
  description: "Rates something.",
  usage: "<something>",
  run: ({
    client: {
      config: { color },
    },
    message,
    args,
  }) => {
    const something = args.join(" ");
    if (!something)
      return message.channel.send("❌ You have to specify something to rate.");

    const rating = getRandomInteger(0, 100);

    message.channel.send({
      embeds: [
        new EmbedBuilder()
          .setDescription(`I rate **${something}** a **${rating}/100**.`)
          .setColor(color),
      ],
    });
  },
};
