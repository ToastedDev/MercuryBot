import axios from "axios";
import { EmbedBuilder } from "discord.js";

/** @type {import('../../utils/types').Command} */
export default {
  name: "meme",
  description: "Gives you a random meme!",
  run: async ({
    client: {
      config: { color },
    },
    message,
  }) => {
    const msg = await message.channel.send(
      "<a:loading:994224812123758722> Getting a meme..."
    );

    const { data: content } = await axios.get(
      "https://www.reddit.com/r/memes/random/.json"
    );
    const meme = {
      permalink: `https://reddit.com${content[0].data.children[0].data.permalink}`,
      title: content[0].data.children[0].data.title,
      image: content[0].data.children[0].data.url,
      likes: content[0].data.children[0].data.ups,
      dislikes: content[0].data.children[0].data.downs,
      comments: content[0].data.children[0].data.num_comments,
    };

    msg.edit({
      content: null,
      embeds: [
        new EmbedBuilder()
          .setTitle(meme.title)
          .setURL(meme.permalink)
          .setImage(meme.image)
          .setColor(color)
          .setFooter({
            text: `👍 ${meme.likes} 👎 ${meme.dislikes} 💬 ${meme.comments}`,
          }),
      ],
    });
  },
};
