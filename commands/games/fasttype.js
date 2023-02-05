import { FastType } from "discord-gamecord";

/** @type {import('../../utils/types').Command} */
export default {
  name: "fasttype",
  description: "Try to type a word as fast as possible!",
  run: ({ client, message }) => {
    const game = new FastType({
      message,
      isSlashGame: false,
      embed: {
        color: client.config.color,
        description: "You have {time} seconds to type the word below.",
      },
      sentence,
    });
    game.startGame();
  },
};
