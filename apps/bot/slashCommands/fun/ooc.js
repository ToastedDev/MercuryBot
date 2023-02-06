import axios from "axios";
import { AttachmentBuilder, EmbedBuilder } from "discord.js";

/** @type {import('../../utils/types').SlashCommand} */
export default {
  name: "outofcontext",
  description: "Gives you a random out of context image.",
  run: async ({
    client: {
      config: { color },
    },
    interaction,
  }) => {
    await interaction.deferReply();

    const res = await axios.get("https://mercuryapi.toastify.tk/ooc");
    const attachment = new AttachmentBuilder(res.data.url, {
      name: `${res.data.number}.png`,
    });

    interaction.editReply({
      embeds: [
        new EmbedBuilder()
          .setImage(`attachment://${res.data.number}.png`)
          .setFooter({
            text: `#${res.data.number}/${res.data.maximum}`,
          })
          .setColor(color),
      ],
      files: [attachment],
    });
  },
};
