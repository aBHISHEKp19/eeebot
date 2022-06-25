const Discord = require('discord.js');

const client = new Discord.Client({ intents: 32767 });
require('dotenv').config();

client.once('ready', () => {
    console.log('EEE is here');
    client.user.setActivity('EEE', { type: "WATCHING" })
});


client.login(process.env.TOKEN);