import { EmbedBuilder } from "discord.js";
import { Configuration, OpenAIApi } from "openai";

const openai = new OpenAIApi(
  new Configuration({
    apiKey: process.env.OPENAI_KEY,
  })
);

/** @type {import('../../utils/types').Command} */
export default {
  name: "chatgpt",
  description: "Ask ChatGPT a question!",
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
      "<a:loading:994224812123758722> Generating a response..."
    );

    const res = await openai.createCompletion({
      model: "text-davinci-003",
      max_tokens: 2048,
      temperature: 0.5,
      prompt,
    });

    msg.edit({
      content: null,
      embeds: [
        new EmbedBuilder()
          .setDescription(`\`\`\`${res.data.choices[0].text}\`\`\``)
          .setColor(color),
      ],
    });
  },
};
