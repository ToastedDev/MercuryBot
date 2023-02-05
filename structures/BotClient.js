import { Client, Collection, GatewayIntentBits } from "discord.js";
import Enmap from "enmap";
import { config } from "../config.js";

export class BotClient extends Client {
  /** @type {Collection<string, import("../utils/types.js").Command>} */
  commands = new Collection();
  slashCommands = new Collection();

  config = config;

  db = new Enmap({
    name: "db",
    dataDir: "./db",
  });

  /** @param {Omit<import('discord.js').ClientOptions, "intents">} [options] */
  constructor(options = {}) {
    super({
      intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
      ],
      ...options,
    });
  }

  connect() {
    this.login(process.env.TOKEN);
  }

  register() {
    ["commands", "events"].forEach(async (handler) => {
      (await import(`../handlers/${handler}.js`).then((x) => x.default))(this);
    });
  }
}
