const Discord = require('discord.js');
const client = new Discord.Client();
const request = require('node-superfetch')
var avconv = require('avconv');
module.exports = {
	category: 'Other',
	aliases: [''],
	minArgs: 0,
	maxArgs: -1,
	syntaxError: '',
	expectedArgs: '',
	description: 'Make the bot say something (usefull for thing)',
	callback: async (message, args, client, prefix, instance) => {
        if (!args[0])
      return message.channel.send(
        "**Please Enter Something To Convert To Speech!**"
      );
    let text = args.join(" ");
    let serverQueue = client.queue.get(message.guild.id)
    if (text.length > 1024)
      return message.channel.send(
        "**Please Enter Text Between 0 And 1024 Characters!**"
      );
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel)
      return message.channel.send("**Please Join A Voice Channel First!**");
    if (
      !voiceChannel
        .permissionsFor(message.client.user)
        .has(["CONNECT", "SPEAK"])
     ) {
      return message.channel.send(
        "**Missing Permissions For The Voice Channel! - [CONNECT, SPEAK]**"
      );
    }
    if (serverQueue) return message.channel.send("**Cannot Play TTS While Music Is Being Played!**")
    if (!voiceChannel.joinable)
      return message.channel.send("**Cannot Join Voice Channel!**");
    if (bot.voice.connections.has(voiceChannel.guild.id))
      return message.channel.send("**I Am Already Converting TTS!**");
    try {
      const connection = await voiceChannel.join();
      const { url } = await request
        .get("http://tts.cyzon.us/tts")
        .query({ text });
      const dispatcher = connection.play(url);
      await message.react("🔉");
      dispatcher.once("finish", () => voiceChannel.leave());
      dispatcher.once("error", () => voiceChannel.leave());
      return null;
    } catch (err) {
      voiceChannel.leave();
      return message.channel.send(
        `**Oh No, An Error Occurred: Try Again Later!**`
      );
    }

    }
}