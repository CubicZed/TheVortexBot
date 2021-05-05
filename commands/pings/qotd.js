const Discord = require('discord.js');
module.exports = {
	name: 'qotd',
	description: 'Makes a question of the day embed',
	args: true,
	usage: '<question>',
	execute(message, args) {
		if (message.member.roles.cache.some(role => role.name == 'Staff')) {
			if (message.channel.id !== '818736569732431912') {
				return message.reply(
					'this command can only be used in <#818736569732431912>!'
				);
			}
			const question = args.join(' ');
			const qotdEmbed = new Discord.MessageEmbed()
				.setAuthor(message.author.tag, message.author.avatarURL())
				.setTitle('❓ Question of the Day ❓')
				.setDescription(question)
				.setTimestamp();

			message.channel.send('<@&818753867847434250>', qotdEmbed)
				.then(sentMessage => {
					sentMessage.react('❓');
				});
			message.delete()	
		} else {
			message.reply(
				'you do not have permission to do this.\n**Required role:** Staff'
			);
		}
	}
};
