import { FindEmoji } from "discord-gamecord";

/** @type {import('../../utils/types').Command} */
export default {
  name: "findemoji",
  description: "Find an emoji in a sea of other emojis!",
  run: ({ client, message }) => {
    const game = new FindEmoji({
      message,
      isSlashGame: false,
      embed: {
        description: "Remember the emojis from the board below.",
        findDescription: "Find the {emoji} before the time runs out.",
        color: client.config.color,
      },
      winMessage: "You selected the correct emoji!",
      loseMessage: "You selected the wrong emoji!",
      timeoutMessage: "You ran out of time!",
      playerOnlyMessage: "❌ Only {player} can use these buttons.",
    });
    game.startGame();
  },
};
