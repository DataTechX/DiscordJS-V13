<div align="center">
  <p>
    <h1>Discord.JS v13 Tutorials</h1>
  </p>
</div>

## Introduction & บทนำ

***
นี้
***
## How To Setup & How To Setup

[Build a Discord Bot with Discord.js (v13)](https://dev.to/hypening/build-a-discord-bot-with-discord-js-v13-14mj)

[สร้าง Discord Bot ด้วย Discord.js (v13)](https://dev.to/hypening/build-a-discord-bot-with-discord-js-v13-14mj)

[Discordjs](https://discord.js.org/#/)

[Nodejs](https://nodejs.org/en/)

##Adding a command.
###You can simply add a command in the specific folder with the code below:
```javascript
const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'ping',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        message.channel.send('pong');
    }
}
```
###คุณสามารถเพิ่มคำสั่งในโฟลเดอร์เฉพาะด้วยรหัสด้านล่าง: 

```javascript
const { Client, Message, MessageEmbed } = require('discord.js');
module.exports = {
    name: 'ping',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        const row = new MessageActionRow()
			.addComponents(
			const button = new MessageButton()
	    .setCustomId('primary')
	    .setLabel('Primary')
      .setStyle('PRIMARY')
      .setDisabled(true);
			);

		const embed = new MessageEmbed()
			.setColor('#0099ff')
			.setTitle('Some title')
			.setURL('https://discord.js.org')
			.setDescription('Some description here');

		await message.reply({ content: 'Pong!', ephemeral: true, embeds: [embed], components: [row] });
    }
}
```

```fix This project is created for educational purposes only. If there is any error, you can inquire at [Support](discord.gg/ZWmJVExdbR)
 โปรเจคนี้สร้างขึ้นเพื่อการศึกษาเท่านั้น หากมีข้อผิดพลาดทางใดสามารถสอบถามได้ที่ [Support](discord.gg/ZWmJVExdbR)
 ```

