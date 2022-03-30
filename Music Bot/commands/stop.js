const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('stop')
        .setDescription('Stops the Player.'),
    async execute(interaction, player) {
        let guildQueue = player.getQueue(interaction.guild.id);

        guildQueue.stop();
        interaction.channel.send('Stopped the Player.');
    }
}