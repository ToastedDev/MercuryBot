import axios from "axios";
import { AttachmentBuilder } from "discord.js";
import { EmbedBuilder } from "discord.js";

/** @type {import('../../utils/types').Command} */
export default {
  name: "ooc",
  description: "Gives you a random out of context image.",
  run: async ({
    client: {
      config: { color },
    },
    message,
    args,
  }) => {
    const msg = await message.channel.send(
      "<a:loading:994224812123758722> Finding a good image..."
    );

    const res = await axios.get("https://mercuryapi.toastify.tk/ooc");
    const attachment = new AttachmentBuilder(res.data.url, {
      name: `${res.data.number}.png`,
    });

    msg.edit({
      content: null,
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
