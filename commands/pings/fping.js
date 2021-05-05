const Discord = require('discord.js');
module.exports = {
	name: 'fping',
	guildOnly: 'true',
	args: true,
	usage: '<fun fact>',
	execute(message, args) {
		if (message.member.roles.cache.some(role => role.name == 'Staff')) {
			const funfact = args.join(' ');
			const ffEmbed = new Discord.MessageEmbed()
				.setAuthor(message.author.tag, message.author.avatarURL())
				.setTitle('💭 FUN FACT 💭')
				.setDescription(funfact)
				.setColor('RANDOM');
			message.channel.send('<@&818755173902974986>', ffEmbed);
			message.delete();
		} else {
			message.reply(
				'you do not have permission to do this!\n**Required role:** Staff'
			);
		}
	}
};
