import { Client } from "craiyon";
import {
  ApplicationCommandOptionType,
  AttachmentBuilder,
  EmbedBuilder,
} from "discord.js";

const craiyon = new Client();

/** @type {import('../../utils/types').SlashCommand} */
export default {
  name: "generate-image",
  description: "Generate an image using Craiyon (formerly DALL-E Mini).",
  options: [
    {
      name: "prompt",
      description: "The prompt for the image.",
      type: ApplicationCommandOptionType.String,
      required: true,
    },
  ],
  run: async ({
    client: {
      config: { color },
    },
    interaction,
  }) => {
    const prompt = interaction.options.getString("prompt");

    await interaction.deferReply();

    const { images } = await craiyon.generate({ prompt });
    const attachment = new AttachmentBuilder(images[0].asBuffer(), {
      name: "craiyon.png",
    });

    interaction.followUp({
      embeds: [
        new EmbedBuilder()
          .setDescription(`**Prompt**: ${prompt}`)
          .setImage("attachment://craiyon.png")
          .setColor(color),
      ],
      files: [attachment],
    });
  },
};
