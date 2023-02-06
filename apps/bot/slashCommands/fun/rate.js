import { ApplicationCommandOptionType, EmbedBuilder } from "discord.js";
import { getRandomInteger } from "../../functions.js";

/** @type {import('../../utils/types').SlashCommand} */
export default {
  name: "rate",
  description: "Rates something.",
  usage: "<something>",
  options: [
    {
      name: "something",
      description: "The thing to rate.",
      type: ApplicationCommandOptionType.String,
      required: true,
    },
  ],
  run: ({
    client: {
      config: { color },
    },
    interaction,
  }) => {
    const something = interaction.options.getString("something");
    const rating = getRandomInteger(0, 100);

    interaction.reply({
      embeds: [
        new EmbedBuilder()
          .setDescription(`I rate **${something}** a **${rating}/100**.`)
          .setColor(color),
      ],
    });
  },
};
