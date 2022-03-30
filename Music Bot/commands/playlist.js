const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('playlist')
        .setDescription('Plays a Youtube or Spotify playlist.')
        .addStringOption( (option) => option
            .setName('query')
            .setDescription('Enter playlist name or link.')
            .setRequired(true)),
    async execute(interaction, player) {
        let guildQueue = player.getQueue(interaction.guild.id);

        let queue = player.createQueue(interaction.guild.id);
        await queue.join(interaction.member.voice.channel);

        const query = interaction.options.getString('query');

        let song = await queue.playlist(query).catch(_ => {
            if(!guildQueue)
                queue.stop();
        });
    }
}