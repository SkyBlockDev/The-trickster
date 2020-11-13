const Discord = require('discord.js');
const client = new Discord.Client();
const { MessageEmbed } = require('discord.js'); 
const ms = require("parse-ms");
const db = require('quick.db')
module.exports = {
  aliases: [''],
  minArgs: 0,
  maxArgs: -1,
  syntaxError: "",
  expectedArgs: "", 
  description: 'Shows the leaderboard of points', 
  callback: async (message, args, text, client, prefix, instance) => {
    let newrs = await db.fetch(`started_${message.author.id}`)
    if (newrs !== '1') {
      message.channel.send(`points will now start flooding next time you do !claim`)
     db.set(`claim_${message.author.id}`, Date.now())
     db.set(`started_${message.author.id}`, '1')
     return
    }

    let news = await db.fetch(`claim_${message.author.id}`)
    let pp = Date.now()
    let points = (pp - news)
    let amount = (points / 120000).toFixed(0)
        const Embed = new Discord.MessageEmbed()
        .setTitle('Points!')
        .setDescription(`**${amount} points were given to you by !claim enjoy!**`)
        .setColor('GREEN')
        message.reply(Embed);
    db.set(`claim_${message.author.id}`, Date.now())
    db.add(`points_${message.author.id}`, amount)
          

  }
}
