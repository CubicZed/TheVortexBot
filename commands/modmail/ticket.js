const Discord = require('discord.js');
module.exports = {
	name: 'ticket',
  aliases: ['t'],
	description: 'Opens a ticket to us',
	args: true,
	usage: '<message>',
	execute(message, args) {
		if (message.channel.type !== 'dm') {
			return message.reply('this command can only be used in DMs!');
		}
		const theVortex = message.client.guilds.cache.find(
			guild => guild.id === '722788871716470845'
		);
		const channelName = message.author.username;
		const channel = theVortex.channels.cache.find(
			ch => ch.topic === message.author.id
		);
		if (channel) {
			const channelSend = new Discord.MessageEmbed()
				.setTitle('Message Received')
				.setDescription(args.join(' '))
				.setTimestamp()
				.setColor('#01ff02')
        .setFooter(`${message.author.tag} | ${message.author.id}`, message.author.avatarURL())

			const replyEmbed = new Discord.MessageEmbed()
				.setTitle('Message Sent')
				.setDescription(
					args.join(' ')
				)
				.setColor('#01ff02')
				.setTimestamp()
        .setFooter(`${theVortex.name} | ${theVortex.id}`, theVortex.iconURL())

			message.channel.send(replyEmbed)
			channel.send(channelSend);
		} else if (!channel) {
			theVortex.channels.create(`${channelName} ${message.author.discriminator}`).then(chann => {
        chann.setParent('836595048111013978');
				chann.setTopic(message.author.id)
        chann.lockPermissions()

        const logChannel = theVortex.channels.cache.find(log => log.id === '836595487380602889')

        const newTicket = new Discord.MessageEmbed()
        .setTitle('New Ticket')
        .setDescription('Send \`;reply <message>\` in this channel to reply. To send an anonymous reply, use \`;areply\`. Messages sent in this channel that are not the reply command are ignored, and can be used for staff discussion. Use the command \`;close [reason]\` to close this ticket.')
        .setColor('#1e90ff')
        .setFooter(`${message.author.tag} | ${message.author.id}`, message.author.avatarURL())

        const reminder = new Discord.MessageEmbed()
        .setTitle('Your Ticket was Created')
        .setDescription('To send more messages, or to reply to any message that we sent, please use the \`;ticket\` command, or its alias: \`;t\`.')
        .setColor('#1e90ff')
        .setFooter(`${theVortex.name} | ${theVortex.id}`, theVortex.iconURL())

        const channelSend = new Discord.MessageEmbed()
				.setTitle('Message Received')
				.setDescription(args.join(' '))
				.setTimestamp()
				.setColor('#01ff02')
        .setFooter(`${message.author.tag} | ${message.author.id}`, message.author.avatarURL())

				const replyEmbed = new Discord.MessageEmbed()
				.setTitle('Message Sent')
				.setDescription(
					args.join(' ')
				)
				.setColor('#01ff02')
				.setTimestamp()
        .setFooter(`${theVortex.name} | ${theVortex.id}`, theVortex.iconURL())

        const logEmbed = new Discord.MessageEmbed()
        .setTitle('New Ticket')
        .setFooter(`${message.author.tag} | ${message.author.id}`, message.author.avatarURL())
        .setTimestamp()
        .setColor('#01ff02')

				message.channel.send(reminder)
        message.channel.send(replyEmbed);
				chann.send(newTicket)
        chann.send(channelSend);
        logChannel.send(logEmbed)
			});
		} else {
			message.reply('an error occured!');
		}
	}
};
