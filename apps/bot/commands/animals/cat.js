import { EmbedBuilder } from "discord.js";

import nampis from "nampis";
const { animals } = nampis;

/** @type {import('../../utils/types').Command} */
export default {
  name: "cat",
  description: "Fetches you a cute cat.",
  aliases: ["kitty", "kitten"],
  run: async ({
    client: {
      config: { color },
    },
    message,
  }) => {
    const msg = await message.channel.send(
      "<a:loading:994224812123758722> Finding a cute cat image..."
    );

    msg.edit({
      content: null,
      embeds: [
        new EmbedBuilder().setImage(await animals.cat()).setColor(color),
      ],
    });
  },
};
