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
 * @typedef {Omit<import('discord.js').ChatInputApplicationCommandData, "dmPermission"> & {
 * run: (params: { client: import("../structures/BotClient.js").BotClient, interaction: import("discord.js").ChatInputCommandInteraction & {
 * member: import('discord.js').GuildMember }, prefix: string }) => any}} SlashCommand
 */

export default {};
