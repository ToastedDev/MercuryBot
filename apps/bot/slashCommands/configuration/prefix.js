import { ApplicationCommandOptionType, EmbedBuilder } from "discord.js";

/** @type {import('../../utils/types').SlashCommand} */
export default {
  name: "prefix",
  description: "Change the prefix for your server.",
  defaultMemberPermissions: ["ManageGuild"],
  options: [
    {
      name: "new_prefix",
      description: "The new prefix to use.",
      type: ApplicationCommandOptionType.String,
      maxLength: 5,
      required: true,
    },
  ],
  run: ({ client, interaction }) => {
    const prefix = interaction.options.getString("new_prefix");

    client.db.set(interaction.guild.id, prefix, "prefix");
    interaction.reply({
      embeds: [
        new EmbedBuilder()
          .setDescription(`Changed prefix to \`${prefix}\`.`)
          .setColor("Green"),
      ],
      ephemeral: true,
    });
  },
};
