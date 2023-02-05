import { ApplicationCommandOptionType } from "discord.js";
import { TicTacToe } from "discord-gamecord";

/** @type {import('../../utils/types').SlashCommand} */
export default {
  name: "tictactoe",
  description:
    "Play TicTacToe in Discord! Play against an AI, or against someone else.",
  options: [
    {
      name: "opponent",
      description: "Your opponent when playing Connect 4.",
      type: ApplicationCommandOptionType.User,
      required: true,
    },
  ],
  run: ({ client, interaction }) => {
    const { emojis } = client.config;
    const game = new TicTacToe({
      message: interaction,
      isSlashGame: true,
      opponent: interaction.options.getUser("opponent"),
      embed: {
        title: "TicTacToe",
        color: client.config.color,
      },
      emojis: {
        xButton: emojis.ttt.player1,
        oButton: emojis.ttt.player2,
        blankButton: emojis.empty,
      },
      turnMessage: "{emoji} | It's {player}'s turn.",
      winMessage: "{emoji} | {player} won the TicTacToe game!",
      tieMessage: "It was a tie! No one won.",
      timeoutMessage: "The game was unfininshed. No one won.",
      playerOnlyMessage:
        "❌ Only {player} and {opponent} can use these buttons.",
      requestMessage: "{player} has invited you for a round of **TicTacToe**.",
      rejectMessage:
        "The player denied your request for a round of **TicTacToe**.",
    });
    game.startGame();
  },
};
