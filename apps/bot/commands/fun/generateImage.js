import { Client } from "craiyon";
import { EmbedBuilder } from "discord.js";
import { AttachmentBuilder } from "discord.js";

const craiyon = new Client();

/** @type {import('../../utils/types').Command} */
export default {
  name: "generateImage",
  description: "Generate an image using Craiyon (formerly DALL-E Mini).",
  aliases: ["generate", "image", "craiyon", "dall-e"],
  usage: "<prompt>",
  run: async ({
    client: {
      config: { color },
    },
    message,
    args,
  }) => {
    const prompt = args.join(" ");
    if (!prompt)
      return message.channel.send("❌ You have to specify a prompt.");

    const msg = await message.channel.send(
      "<a:loading:994224812123758722> Painting the perfect image..."
    );

    const { images } = await craiyon.generate({ prompt });
    const attachment = new AttachmentBuilder(images[0].asBuffer(), {
      name: "craiyon.png",
    });

    msg.edit({
      content: null,
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
