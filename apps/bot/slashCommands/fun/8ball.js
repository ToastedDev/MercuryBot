import axios from "axios";
import { ApplicationCommandOptionType, EmbedBuilder } from "discord.js";

/** @type {import('../../utils/types').SlashCommand} */
export default {
  name: "8ball",
  description: "Answering life's most important questions.",
  options: [
    {
      name: "question",
      description: "The question to answer.",
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
    const question = interaction.options.getString("question", true);

    await interaction.deferReply();

    const res = await axios.get("https://api.popcat.xyz/8ball");

    interaction.followUp({
      embeds: [
        new EmbedBuilder()
          .setDescription(`**Q**: ${question}\n**A**: ${res.data.answer}`)
          .setColor(color),
      ],
    });
  },
};
