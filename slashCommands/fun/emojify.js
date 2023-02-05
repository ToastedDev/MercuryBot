import { ApplicationCommandOptionType } from "discord.js";
import { Emojify } from "discord-gamecord";

/** @type {import('../../utils/types').SlashCommand} */
export default {
  name: "emojify",
  description: "Convert text into emojis!",
  options: [
    {
      name: "text",
      description: "The text to convert into emojis.",
      type: ApplicationCommandOptionType.String,
      required: true,
    },
  ],
  run: async ({ interaction }) => {
    interaction.reply(await Emojify(interaction.options.getString("text")));
  },
};
