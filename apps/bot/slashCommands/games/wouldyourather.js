import { WouldYouRather } from "discord-gamecord";

/** @type {import('../../utils/types').SlashCommand} */
export default {
  name: "wouldyourather",
  description: "Play Would You Rather in Discord!",
  run: ({ client, message }) => {
    const game = new WouldYouRather({
      message: interaction,
      isSlashGame: true,
      embed: {
        title: "Would you rather...",
        color: client.config.color,
      },
      errMessage: "Uh oh, we had an oopsie! Please try again.",
      playerOnlyMessage: "❌ Only {player} can use these buttons.",
    });
    game.startGame();
  },
};
