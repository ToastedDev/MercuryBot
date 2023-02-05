import { TwoZeroFourEight } from "discord-gamecord";

/** @type {import('../../utils/types').Command} */
export default {
  name: "2048",
  description: "Play 2048 in Discord!",
  run: ({ client, message }) => {
    const { emojis } = client.config;
    const game = new TwoZeroFourEight({
      message,
      isSlashGame: false,
      embed: {
        color: client.config.color,
      },
      emojis: {
        up: emojis.up,
        down: emojis.down,
        left: emojis.left,
        right: emojis.right,
      },
      buttonStyle: "SECONDARY",
      playerOnlyMessage: "❌ Only {player} can use these buttons.",
    });
    game.startGame();
  },
};
