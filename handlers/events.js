import fs from "fs";

export default (client) => {
  fs.readdirSync("./events")
    .filter((file) => file.endsWith(".js"))
    .forEach(async (file) => {
      const event = await import(`../events/${file}`).then((x) => x.default);
      const eventName = file.split(".js")[0];
      client.on(eventName, event.bind(null, client));
    });
};
