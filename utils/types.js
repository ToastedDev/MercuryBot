/**
 * @typedef {Object} Command
 * @prop {string} name
 * @prop {string} [description]
 * @prop {string[]} [aliases]
 * @prop {string} [usage]
 * @prop {string} [directory] - Added by the handler.
 * @prop {import("discord.js").PermissionResolvable[]} [userPermissions]
 * @prop {(params: { client: import("../structures/BotClient.js").BotClient, message: import("discord.js").Message, args: string[], prefix: string }) => any} run
 */

/**
 * @typedef {Object} Database
 * @prop {string} prefix
 */

export default {};
