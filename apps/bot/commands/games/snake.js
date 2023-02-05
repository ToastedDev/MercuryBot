import { Snake } from "discord-gamecord";

/** @type {import('../../utils/types').Command} */
export default {
  name: "snake",
  description: "Play snake in Discord!",
  aliases: ["snek"],
  run: ({ client, message }) => {
    const { emojis } = client.config;
    const game = new Snake({
      message,
      isSlashGame: false,
      embed: {
        title: "Snake",
        color: client.config.color,
      },
      emojis: {
        up: emojis.up,
        down: emojis.down,
        left: emojis.left,
        right: emojis.right,
      },
      snake: {
        body: "🟢",
      },
      playerOnlyMessage: "❌ Only {player} can use these buttons.",
    });
    game.startGame();
  },
};
