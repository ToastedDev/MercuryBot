import { RockPaperScissors } from "discord-gamecord";

/** @type {import('../../utils/types').Command} */
export default {
  name: "rps",
  description: "Play Rock Paper Scissors against someone in Discord!",
  aliases: ["rockpaperscissors"],
  usage: "<opponent>",
  run: ({ client, message }) => {
    if (!message.mentions.users.first())
      return message.channel.send({
        content: "❌ You need to mention a member.",
      });
    const game = new RockPaperScissors({
      message,
      isSlashGame: false,
      opponent: message.mentions.users.first(),
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
