import { ApplicationCommandOptionType } from "discodr.js";
import { RockPaperScissors } from "discord-gamecord";

/** @type {import('../../utils/types').SlashCommand} */
export default {
  name: "rps",
  description: "Play Rock Paper Scissors against someone in Discord!",
  options: [
    {
      name: "opponent",
      description: "Your opponent when playing Connect 4.",
      type: ApplicationCommandOptionType.User,
      required: true,
    },
  ],
  run: ({ client, interaction }) => {
    const game = new RockPaperScissors({
      message: interaction,
      isSlashGame: true,
      opponent: interaction.options.getUser("opponent"),
      embed: {
        color: client.config.color,
      },
      buttonStyle: "SECONDARY",
      pickMessage: "You chose {emoji}.",
      winMessage: "{player} won the Rock Paper Scissors game!",
      tieMessage: "It was a tie! No one won.",
      timeoutMessage: "The game was unfininshed. No one won.",
      playerOnlyMessage:
        "❌ Only {player} and {opponent} can use these buttons.",
      requestMessage:
        "{player} has invited you for a round of **Rock Paper Scissors**.",
      rejectMessage:
        "The player denied your request for a round of **Rock Paper Scissors**.",
    });
    game.startGame();
  },
};
