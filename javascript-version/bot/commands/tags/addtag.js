
 const Discord = require("discord.js");
 const Enmap = require("enmap");
 const { MessageEmbed } = require('discord.js'); 
 const ms = require("parse-ms");
 const maxtags = 25
 module.exports = {
  cooldown: '2s',
  category: 'tags',
  aliases: ['createtag'],
  minArgs: 1,
  maxArgs: -1,
  expectedArgs: "Please add a input", 
  description: 'add a tag', 
  callback: async (message, args, text, client) => {
    if (message.member.hasPermission('ADMINISTRATOR') || message.author.id == 336465356304678913 || message.member.hasPermission('MANAGE_MESSAGES')) {
    let key = Object.keys(client.guild.get(message.guild.id))
    bannednames = ['id', message.guild.id, 'guild', 'guildname', 'embed']
    key = key.length
    console.log(key)
    let name = args[0]
    if(name.includes(bannednames)) {
        message.reply('sorry those are banned names')
    } else if(client.guild.get(message.guild.id, name)) {
        if(!args[1]) {
            message.channel.send('What do you want to put in your tag?, type cancel to cancel this action')
            let input = ''
            const filter = m => m.author.id === message.author.id
            const collector = new Discord.MessageCollector(message.channel, filter, {
                max: 1,
                time: 1000 * 150
              })
              collector.on('end', (collected) =>{
                collected.forEach(value => {
                input += value.content
                })
            if(!input){
                return message.reply('The tag expired please use !addtag if you want to try again')
            } else if(input == 'cancel') {
                return message.reply('action cancelled')
            }
    
        client.guild.set(message.guild.id, input, name);
        const Embed = new Discord.MessageEmbed()
        .setTitle('tag edited')
        .addFields(
            { name: name, value: input }
        )
        .setColor('#FF0000')
        message.reply(Embed);
        });
        }else{
            let input =  args.slice(1).join(' ')
        client.guild.set(message.guild.id, input, name);
        const Embed = new Discord.MessageEmbed()
        .setTitle('tag edited')
        .addFields(
            { name: name, value: input }
        )
        .setColor('#FF0000')
        message.reply(Embed);
        }
    } else if(key > maxtags+1) {
        message.reply(`sorry you can only have a maximum of ${maxtags} tags if you need more tags please join the support server (!info) or message tricked#3777`)
    } else if(!args[1]) {
        message.channel.send('What do you want to put in your tag?, type cancel to cancel this action')
        let input = ''
        const filter = m => m.author.id === message.author.id
        const collector = new Discord.MessageCollector(message.channel, filter, {
            max: 1,
            time: 1000 * 150
          })
          collector.on('end', (collected) =>{
            collected.forEach(value => {
            input += value.content
            })
        if(!input){
            return message.reply('The tag expired please use !addtag if you want to try again')
        } else if(input == 'cancel') {
            return message.reply('action cancelled')
        }

    client.guild.set(message.guild.id, input, name);
    const Embed = new Discord.MessageEmbed()
    .setTitle('tag created')
    .addFields(
        { name: name, value: input }
    )
    .setColor('#FF0000')
    message.reply(Embed);
    });
    }else{
        let input =  args.slice(1).join(' ')
    client.guild.set(message.guild.id, input, name);
    const Embed = new Discord.MessageEmbed()
    .setTitle('tag created')
    .addFields(
        { name: name, value: input }
    )
    .setColor('#FF0000')
    message.reply(Embed);
    }

    } else {
            const Embed = new Discord.MessageEmbed()
            .setColor('#03fc49')
            .setTitle(`Sorry, you don't have the permission: 'ADMINISTRATOR/MANAGE zMESSAGES' to execute this command`); c
        message.reply(Embed);
    }
  }
}