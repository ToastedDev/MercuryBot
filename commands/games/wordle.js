import { Wordle } from "discord-gamecord";

/** @type {import('../../utils/types').Command} */
export default {
  name: "wordle",
  description: "Play Wordle in Discord!",
  run: ({ client, message }) => {
    const game = new Wordle({
      message,
      isSlashGame: false,
      embed: {
        color: client.config.color,
      },
      customWord: null,
      playerOnlyMessage: "❌ Only {player} can use these buttons.",
    });
    game.startGame();
  },
};
