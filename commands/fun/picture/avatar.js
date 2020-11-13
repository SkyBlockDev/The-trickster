const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
	aliases: ['av'],
	minArgs: 0,
	maxArgs: -1,
	syntaxError: '',
	expectedArgs: '',
	description: 'steal sum1 avatar',
	callback: (message, args, text, client, prefix, instance) => {
		let user;

		if (message.mentions.users.first()) {
			user = message.mentions.users.first();
		} else {
			user = message.author;
		}

		let avatar = user.displayAvatarURL({ size: 4096, dynamic: true });
		const embed = new Discord.MessageEmbed()
			.setTitle(`${user.tag} avatar`)
			.setDescription(`[Avatar URL de **${user.tag}**](${avatar})`)
			.setColor(0x00ae86)
			.setImage(avatar);
		return message.channel.send(embed);
	},
};
