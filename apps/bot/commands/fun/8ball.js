import axios from "axios";
import { EmbedBuilder } from "discord.js";

/** @type {import('../../utils/types').Command} */
export default {
  name: "8ball",
  description: "Answering life's most important questions.",
  usage: "<question>",
  run: async ({
    client: {
      config: { color },
    },
    message,
    args,
  }) => {
    const question = args.join(" ");
    if (!question)
      return message.channel.send("❌ You have to ask a question.");

    const msg = await message.channel.send(
      "<a:loading:994224812123758722> Thinking..."
    );

    const res = await axios.get("https://api.popcat.xyz/8ball");

    msg.edit({
      content: null,
      embeds: [
        new EmbedBuilder()
          .setDescription(`**Q**: ${question}\n**A**: ${res.data.answer}`)
          .setColor(color),
      ],
    });
  },
};
