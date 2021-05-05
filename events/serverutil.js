const Discord = require('discord.js');
module.exports = {
	name: 'message',
	execute(message) {
    
    var lowerCaseMessage = message.content.toLowerCase();

		if (
			lowerCaseMessage.startsWith('pls rob') ||
			lowerCaseMessage.startsWith('pls steal') ||
			lowerCaseMessage.startsWith('pls bankrob') ||
			lowerCaseMessage.startsWith('pls heist')
		) {
			message.channel.send(
				'<a:a_kek:779964432776036392> rob and heist are disabled'
			);
		}

		 if (lowerCaseMessage.startsWith('pls weekly')) {
			if (
				message.member.roles.cache.some(
					role => role.name == 'Level 1┃Tiny Vortex'
				)
			) {
				return;
			}
			const monthlyEmbed = new Discord.MessageEmbed()
				.setTitle('Why is my weekly not working?')
				.setDescription(
					'Weekly works only for people with Amari Level 1 and up. Same goes for monthly.\nAmari Level 1 is `4 minutes and 40 seconds` of messaging. Not that hard, eh?\n\nType `*r` to check your level.'
				)
				.setColor('#303136');

			message.channel.send(monthlyEmbed);
		}

		if (lowerCaseMessage.startsWith('pls monthly')) {
			if (
				message.member.roles.cache.some(
					role => role.name == 'Level 1┃Tiny Vortex'
				)
			) {
				return;
			}
			const monthlyEmbed = new Discord.MessageEmbed()
				.setTitle('Why is my monthly not working?')
				.setDescription(
					'Monthly works only for people with Amari Level 1 and up. Same goes for weekly.\nAmari Level 1 is `4 minutes and 40 seconds` of messaging. Not that hard, eh?\n\nType `*r` to check your level.'
				)
				.setColor('#303136');

			message.channel.send(monthlyEmbed);
		}
	}
};
