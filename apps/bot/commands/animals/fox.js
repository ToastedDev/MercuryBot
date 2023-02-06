import { EmbedBuilder } from "discord.js";

import nampis from "nampis";
const { animals } = nampis;

/** @type {import('../../utils/types').Command} */
export default {
  name: "fox",
  description: "Fetches you a cute fox.",
  run: async ({
    client: {
      config: { color },
    },
    message,
  }) => {
    const msg = await message.channel.send(
      "<a:loading:994224812123758722> Finding a cute fox image..."
    );

    msg.edit({
      content: null,
      embeds: [
        new EmbedBuilder().setImage(await animals.fox()).setColor(color),
      ],
    });
  },
};
