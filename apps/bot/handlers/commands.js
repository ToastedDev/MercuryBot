import fs from "fs";

/** @type {(client: import("../structures/BotClient").BotClient) => any} */
export default (client) => {
  fs.readdirSync("./commands").forEach(async (dir) => {
    const commandFiles = fs
      .readdirSync(`./commands/${dir}`)
      .filter((file) => file.endsWith("js"));

    for (const file of commandFiles) {
      const command = await import(`../commands/${dir}/${file}`)
        .then((x) => x.default)
        .catch(() => null);
      if (!command?.name || !command?.run) continue;

      client.commands.set(command.name, { directory: dir, ...command });
    }
  });
};
