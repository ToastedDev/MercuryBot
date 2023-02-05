import { ApplicationCommandOptionType } from "discord.js";
import { Connect4 } from "discord-gamecord";

/** @type {import('../../utils/types').SlashCommand} */
export default {
  name: "connect4",
  description: "Play Connect 4 against someone in Discord!",
  options: [
    {
      name: "opponent",
      description: "Your opponent when playing Connect 4.",
      type: ApplicationCommandOptionType.User,
      required: true,
    },
  ],
  run: ({ client, interaction }) => {
    const game = new Connect4({
      message: interaction,
      isSlashGame: true,
      opponent: interaction.options.getUser("opponent"),
      embed: {
        title: "Connect 4",
        color: client.config.color,
      },
      turnMessage: "{emoji} | It's {player}'s turn.",
      winMessage: "{emoji} | {player} won the Connect 4 game!",
      tieMessage: "It was a tie! No one won.",
      timeoutMessage: "The game was unfininshed. No one won.",
      playerOnlyMessage:
        "❌ Only {player} and {opponent} can use these buttons.",
      requestMessage: "{player} has invited you for a round of **Connect 4**.",
      rejectMessage:
        "The player denied your request for a round of **Connect 4**.",
    });
    game.startGame();
  },
};
