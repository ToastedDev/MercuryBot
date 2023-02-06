import { EmbedBuilder } from "discord.js";

import nampis from "nampis";
const { animals } = nampis;

/** @type {import('../../utils/types').SlashCommand} */
export default {
  name: "fox",
  description: "Fetches you a cute fox.",
  run: async ({
    client: {
      config: { color },
    },
    interaction,
  }) => {
    await interaction.deferReply();

    interaction.followUp({
      content: null,
      embeds: [
        new EmbedBuilder().setImage(await animals.fox()).setColor(color),
      ],
    });
  },
};
