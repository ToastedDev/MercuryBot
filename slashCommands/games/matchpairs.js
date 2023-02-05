import { MatchPairs } from "discord-gamecord";

/** @type {import('../../utils/types').SlashCommand} */
export default {
  name: "matchpairs",
  description: "Match pairs of fruits in Discord!",
  run: ({ client, interaction }) => {
    const game = new MatchPairs({
      message: interaction,
      isSlashGame: true,
      embed: {
        color: client.config.color,
      },
      winMessage:
        "**You won the game! You turned a total of `{tilesTurned}` tiles.**",
      loseMessage:
        "**You lost the game! You turned a total of `{tilesTurned}` tiles.**",
      playerOnlyMessage: "❌ Only {player} can use these buttons.",
    });
    game.startGame();
  },
};
