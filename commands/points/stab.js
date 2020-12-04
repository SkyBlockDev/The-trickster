 const Discord = require("discord.js");
 const Enmap = require("enmap");
 const { MessageEmbed } = require('discord.js'); 
 const ms = require("parse-ms");
 module.exports = {
  cooldown: '2s',
  category: 'Points',
  aliases: [''],
  minArgs: 0,
  maxArgs: -1,
  syntaxError: "",
  expectedArgs: "", 
  description: '5% discount robs', 
  callback: async (message, args, text, client) => {

        let goalitem = 'Dagger'
    let item = client.userProfiles.get(message.author.id, "items")
    if(!item.includes(goalitem)) {
        return message.reply('You dont own a dagger')
    }

   let timeout = 300000 // 24 hours in milliseconds, change if you'd like.
    let attack = message.mentions.members.first()
    let member = message.author

    let rob = await client.userProfiles.get(member.id, 'rob');

     if (rob !== null && timeout - (Date.now() - rob) > 0) {
        let time = ms(timeout - (Date.now() - rob));
              const Embed = new Discord.MessageEmbed() // talking
        .setTitle('points!')
        .setDescription(`You already robbed someone\n\nyou can come back and scam someone in **${time.hours}h ${time.minutes}m ${time.seconds}s**!`) 
        .setColor('#FF0000')
        message.reply(Embed);
        return
    } else {
   

    let targetuser = await client.userProfiles.get(attack.id, 'points'); // fetch mentioned users balance
    let num = (targetuser * 0.20)
    let author = await client.userProfiles.get(member.id, 'points'); // fetch authors balance
    if(`${targetuser}` === `${author}`) {
        const Embed = new Discord.MessageEmbed() // talking
        .setTitle('points!')
        .setDescription(`**Robbing yourself pathetic**`) 
        .setColor('BLUE')
        message.reply(Embed);
        return
    }

    if (author < num) { // if the authors balance is less than 250, return this.
        return message.channel.send(`:x: You need atleast ${num.toFixed(0)}$ to rob that user`)
    }

    if (targetuser < 50) { // if mentioned user has 0 or less, it will return this.
        return message.channel.send(`:x: ${attack.user.username} does not have anything to rob.`)
    }

    const coin = [
    `0`,      
    `1`,
    `2`,
		];
  
    const index = Math.floor(
				Math.random() * (coin.length - 1) + 1
            );
    if(index == '2') {
        message.channel.send(`Your robbery failed and instead you lost ${num.toFixed(0)} point good job!`)
        client.userProfiles.math(attack.id,  '-', num, 'points');
        client.userProfiles.math(member.id,  '+', num, 'points');
        client.userProfiles.set(attack.id, Data.now(), 'rob');
        return;
    }
    let cn = (`${targetuser}` / '3')
    let random = Math.floor(Math.random() * `${cn}`) + 1;


    const embed = new Discord.MessageEmbed()
    .setDescription(`${message.author} you robbed ${attack} and got away with ${random}!`)
    .setColor("GREEN")
    .setTimestamp()
    message.channel.send(embed)
       let quest =  client.userProfiles.get(author.id, 'quest'); 
    if(quest == 'rob'){
       client.userProfiles.set(member.id, 1, 'quest');
    }


    client.userProfiles.math(member.id, '+', random, 'points');
    client.userProfiles.math(attack.id, '-', random, 'points');
    client.userProfiles.set(member.id, Data.now(), 'rob');

}
  }


}