const client = require('../index')

client.on('ready', () => {
    console.log(`${client.user.tag} is now online!`)
    client.user.setPresence({
        activities: [{
            name: `*help`,
            type: 'PLAYING'
        }],
    })
})