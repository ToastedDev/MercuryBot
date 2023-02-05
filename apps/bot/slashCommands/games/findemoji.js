import { FindEmoji } from "discord-gamecord";

/** @type {import('../../utils/types').SlashCommand} */
export default {
  name: "findemoji",
  description: "Find an emoji in a sea of other emojis!",
  run: ({ client, interaction }) => {
    const game = new FindEmoji({
      message: interaction,
      isSlashGame: true,
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
