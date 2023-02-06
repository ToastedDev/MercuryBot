import { EmbedBuilder } from "discord.js";

/** @type {import('../../utils/types').Command} */
export default {
  name: "coinflip",
  description: "Flips a coin for you.",
  aliases: [
    "coin",
    "cointoss",
    "tosscoin",
    "flip",
    "flipcoin",
    "cf",
    "flipacoin",
    "tossacoin",
  ],
  run: ({
    client: {
      config: { color },
    },
    message,
  }) => {
    const result = Math.floor(Math.random() * 2) === 1 ? "heads" : "tails";
    message.channel.send({
      embeds: [
        new EmbedBuilder()
          .setDescription(`It was **${result}**.`)
          .setColor(color),
      ],
    });
  },
};
