
 const Discord = require("discord.js");
 const Enmap = require("enmap");
 const { MessageEmbed } = require('discord.js'); 
 const ms = require("parse-ms");
 module.exports = {
  cooldown: '2s',
  category: 'tags',
  description: "remove a tag",
  aliases: ['deltag', 'deletetag'],
  minArgs: 0,
  maxArgs: -1,
  expectedArgs: "", 
  callback: async ({message, args, text, client}) => {
    if (message.member.hasPermission('ADMINISTRATOR') || message.author.id == 336465356304678913 || message.member.hasPermission('MANAGE_MESSAGES')) {
            let name = args[0]
            bannednames = ['id', message.guild.id, 'guild', 'guildname', 'embed']
    if(name.includes(bannednames)) {
        message.reply('sorry those are banned names')
        return
    } else if(!client.guild.get(message.guild.id, name)){
        message.reply('sorry that tag does not exist.')
        return
    }
    client.guild.delete(message.guild.id, name);
    const Embed = new Discord.MessageEmbed() 
    .setTitle('tag deleted')
    .setDescription('The tag was successfully  deleted') 
    .setColor('#FF0000')
    message.reply(Embed);
        
    } else {
        const Embed = new Discord.MessageEmbed()
            .setColor('#03fc49')
            .setTitle(`Sorry, you don't have the permission: 'ADMINISTRATOR/MANAGE_MESSAGES' to execute this command`);
        message.reply(Embed);
    }

  }
}