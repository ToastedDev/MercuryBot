import { ApplicationCommandOptionType, EmbedBuilder } from "discord.js";
import { Configuration, OpenAIApi } from "openai";

const openai = new OpenAIApi(
  new Configuration({
    apiKey: process.env.OPENAI_KEY,
  })
);

/** @type {import('../../utils/types').SlashCommand} */
export default {
  name: "chatgpt",
  description: "Ask ChatGPT a question!",
  options: [
    {
      name: "prompt",
      description: "The question to ask to ChatGPT.",
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

    const res = await openai.createCompletion({
      model: "text-davinci-003",
      max_tokens: 2048,
      temperature: 0.5,
      prompt,
    });

    interaction.followUp({
      embeds: [
        new EmbedBuilder()
          .setDescription(`\`\`\`${res.data.choices[0].text}\`\`\``)
          .setColor(color),
      ],
    });
  },
};
