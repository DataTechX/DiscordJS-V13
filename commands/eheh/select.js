const { MessageEmbed, MessageActionRow, MessageSelectMenu } = require('discord.js');

const colors = '#8E08F8';

module.exports = {
    name: 'hex',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     */
    run: async (client, message, args) => {

        //EMBED GHOME
        const gome1 = new MessageEmbed()
            .setDescription(`Home`)
            .setColor(colors)

        //MENU
        const muen1 = new MessageSelectMenu()
            .setCustomId('help')
            .setPlaceholder('ตัวเลือก')
            .addOptions([
                {
                    label: 'หน้าหลัก',
                    description: 'หน้าแรก',
                    emoji: '🟢',
                    value: 'home'
                },
                {
                    label: 'นักพัฒนา',
                    description: 'นักพัฒนา',
                    emoji: '🟡',
                    value: 'dev'
                },
                {
                    label: 'ผู้ดูแล',
                    description: 'ผู้ดูแล',
                    emoji: '🔵',
                    value: 'mod'
                },
            ])

            
        const row = new MessageActionRow()
            .addComponents(muen1)

        const i_tu = await message.channel.send({ embeds: [gome1], components: [row] });

        const filterx = tu => tu.user.id === message.author.id;
        const collect = i_tu.createMessageComponentCollector({ filter: filterx, time: 50000 });
        collect.on('collect', async i_tu => {
            if (i_tu.values[0] === 'home' || i_tu.values[1] === 'home') {
                i_tu.reply({ content: 'AOB 20 70 72 6F 67 72 61', ephemeral: true})
            } 
            if (i_tu.values[0] === 'dev' || i_tu.values[1] === 'dev') {
                i_tu.reply({ content: 'AOB F5 EB 31 AF 0A 20 31', ephemeral: true})
            }
            if (i_tu.values[0] === 'mod' || i_tu.values[1] === 'mod') {
                i_tu.reply({ content: 'AOB 00 00 10 00 00 00 20 02', ephemeral: true})
            }
        })
    }
}