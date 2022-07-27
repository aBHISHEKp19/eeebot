const Discord = require('discord.js');
const { joinVoiceChannel } = require('@discordjs/voice');
const client = new Discord.Client({ intents: 32767 });
require('dotenv').config();
const Id = "910239243371163698";

client.once('ready', () => {
    console.log('EEE is here');
    client.user.setActivity('EEE', { type: "WATCHING" })
});

const prefix = 'eee.';

client.on('messageCreate', message => {

    if (message.content === 'kys') {

        message.reply("gimme ur mum");

    }
    if (message.content === 'Kys') {

        message.channel.send(`gimme ur mom <@${message.author.id}>`);

    }
    if (message.content === prefix + 'fuckoff') {

        message.channel.send(`fuck you <@${message.author.id}>`);

    }

    /* if (message.content === prefix + 'start') {
         var interval = setInterval(function () {
 
             message.channel.send("East or west EEE is the best")
                 .catch(console.error); // add error handling here
         }, 5 * 1000);
     }*/
    /*

    setTimeout(function () {

        const i = "East or west EEE is the best";
        
            message.channel.send(i);
        
    }, 5000);*/
    if (message.content === prefix + 'join') {
        if (!joinVoiceChannel) return message.channel.send('You need to be in a channel to execute this command!');
        // if (!args[0]) return message.channel.send("lol");

        const connection = joinVoiceChannel({

            selfDeaf: message.guild.me.voice.setDeaf(false),
            channelId: message.member.voice.channel.id,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator,

        })
    }

})


client.login(process.env.TOKEN);