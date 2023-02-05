import { Wordle } from "discord-gamecord";

/** @type {import('../../utils/types').SlashCommand} */
export default {
  name: "wordle",
  description: "Play Wordle in Discord!",
  run: ({ client, interaction }) => {
    const game = new Wordle({
      message: interaction,
      isSlashGame: true,
      embed: {
        color: client.config.color,
      },
      customWord: null,
      playerOnlyMessage: "❌ Only {player} can use these buttons.",
    });
    game.startGame();
  },
};
