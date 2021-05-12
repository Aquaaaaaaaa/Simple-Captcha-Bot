const Discord = require('discord.js')
const client = new Discord.Client()
const config = require('./config.json')

client.on('message',async message => {   // so first you go to the channel where you want the Embed for the Verification to be so lets say in #verify so you go into #verify and type captcha 
    if(message.content == "captcha") {  
        let cchannel = message.channel

        let capEmbed = new Discord.MessageEmbed()
        .setTitle('Verification')
        .setColor('GREEN')
        .setDescription("Please Send the **Exact** same text into this Channel! \n `I am a Human`")
        cchannel.send(capEmbed)
        // it should send a embed 
    }
});

        client.on('message',async message => {
        let role = message.guild.roles.cache.find(r => r.id === "Your RoleID Here after Verification")
        // this is where we add the Role
        let capsucEmbed = new Discord.MessageEmbed()
        .setDescription('**Succesfully** Verified!')
        if(message.content == "I am a Human") {
        await message.author.send(capsucEmbed)
        message.member.roles.add(role)
        }})

client.on('ready', () => {
    console.log('Logged in as: ' + client.user.tag + 'This bot has been originally made By Aqua!');
});

client.login(config.token)