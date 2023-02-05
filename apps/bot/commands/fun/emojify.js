import { Emojify } from "discord-gamecord";

/** @type {import('../../utils/types').Command} */
export default {
  name: "emojify",
  description: "Convert text into emojis!",
  usage: "<text>",
  run: async ({ message, args }) => {
    if (!args[0])
      return message.channel.send(
        "❌ You have to specify text to convert into emojis."
      );
    message.channel.send(await Emojify(args.join(" ")));
  },
};
