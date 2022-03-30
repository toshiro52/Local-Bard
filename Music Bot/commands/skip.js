const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('skip')
        .setDescription('Skips current song.'),
    async execute(interaction, player) {
        let guildQueue = player.getQueue(interaction.guild.id);

        guildQueue.skip();
        interaction.channel.send('Skipped.');
    }
}