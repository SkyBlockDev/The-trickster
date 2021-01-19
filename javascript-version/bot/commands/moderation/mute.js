

    const Discord = require('discord.js')
const client = new Discord.Client()

module.exports = {
  category: 'Moderation',
  aliases: ['silence'],
  minArgs: 1,
  maxArgs: -1,
  expectedArgs: "pelase mention someone to mute", 
  description: 'mute someone', 
   callback: async ({message, args, text, client, prefix, instance}) => {
    
if (message.member.hasPermission("MANAGE_ROLES") || message.author.id == 336465356304678913) {
       let member = message.mentions.members.first()
    let role = message.guild.roles.cache.find(role => role.name === 'muted')
    if (!role) {
    
      const Embed = new Discord.MessageEmbed()
      .setColor('#03fc49')
      .setTitle(`No muted role found please create one`)
      message.reply(Embed)
return
    }
    member.roles.add(role) .catch(error => message.reply(`Sorry ${message.author} I couldn't mute because of : ${error}`));
    const Embed = new Discord.MessageEmbed()
      .setColor('#03fc49')
      .setTitle(`${member.user.tag} Just got muted`)
    message.reply(Embed)
  return
  } 
  


   const Embed = new Discord.MessageEmbed()
      .setColor('#03fc49')
      .setTitle(`Error, you are not allowed to do this`)
    message.reply(Embed)
    return
  }
}