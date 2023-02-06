import { EmbedBuilder } from "discord.js";

/** @type {import('../../utils/types').SlashCommand} */
export default {
  name: "coinflip",
  description: "Flips a coin for you.",
  run: ({
    client: {
      config: { color },
    },
    interaction,
  }) => {
    const result = Math.floor(Math.random() * 2) === 1 ? "heads" : "tails";
    interaction.reply({
      embeds: [
        new EmbedBuilder()
          .setDescription(`It was **${result}**.`)
          .setColor(color),
      ],
    });
  },
};
