const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('play')
        .setDescription('Plays a song.')
        .addStringOption( (option) => option
            .setName('query')
            .setDescription('Enter song name or link.')
            .setRequired(true)),
    async execute(interaction, player) {
        let guildQueue = player.getQueue(interaction.guild.id);

        let queue = player.createQueue(interaction.guild.id);
        await queue.join(interaction.member.voice.channel);

        const query = interaction.options.getString('query');

        let song = await queue.play(query).catch(_ => {
            if(!guildQueue)
                queue.stop();
        });
    }
}