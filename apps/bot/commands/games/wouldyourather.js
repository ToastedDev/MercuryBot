import { WouldYouRather } from "discord-gamecord";

/** @type {import('../../utils/types').Command} */
export default {
  name: "wouldyourather",
  description: "Play Would You Rather in Discord!",
  aliases: ["wyr"],
  run: ({ client, message }) => {
    const game = new WouldYouRather({
      message,
      isSlashGame: false,
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
