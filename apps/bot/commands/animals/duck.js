import { EmbedBuilder } from "discord.js";

import nampis from "nampis";
const { animals } = nampis;

/** @type {import('../../utils/types').Command} */
export default {
  name: "duck",
  description: "Fetches you a cute duck.",
  run: async ({
    client: {
      config: { color },
    },
    message,
  }) => {
    const msg = await message.channel.send(
      "<a:loading:994224812123758722> Finding a cute duck image..."
    );

    msg.edit({
      content: null,
      embeds: [
        new EmbedBuilder().setImage(await animals.duck()).setColor(color),
      ],
    });
  },
};
