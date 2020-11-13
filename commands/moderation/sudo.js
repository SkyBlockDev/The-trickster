const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
	aliases: [''],
	minArgs: 0,
	maxArgs: -1,
	syntaxError: '',
	expectedArgs: '',
	description: 'make the bot say sum in embed',
	callback: (message, args, text, client, prefix, instance) => {
		if (message.member.hasPermission('MANAGE_MESSAGES')|| message.author.id == 336465356304678913) {
			message.delete();
		let sudo = args.slice(0).join(' ');
		const Embed = new Discord.MessageEmbed()
			.setColor('#03fc49')
			.setTitle(`${sudo}`);
		message.reply(Embed);
		return
		}
		const Embed = new Discord.MessageEmbed()
				.setColor('#03fc49')
				.setTitle(`Error, you are not allowed to do this`);
			message.reply(Embed);
			return;
	},
};
