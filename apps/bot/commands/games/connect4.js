import { Connect4 } from "discord-gamecord";

/** @type {import('../../utils/types').Command} */
export default {
  name: "connect4",
  description: "Play Connect 4 against someone in Discord!",
  usage: "<opponent>",
  run: ({ client, message }) => {
    if (!message.mentions.users.first())
      return message.channel.send({
        content: "❌ You need to mention a member.",
      });
    const game = new Connect4({
      message,
      isSlashGame: false,
      opponent: message.mentions.users.first(),
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
