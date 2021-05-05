module.exports = {
	name: 'server-info',
  aliases: ['si', 'serverinfo'],
	description: 'shows the server info',
	execute(message, args) {
	  const Discord = require('discord.js')
    const moment = require('moment');
    const members = message.guild.members.cache;
    const sembed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setThumbnail(message.guild.iconURL())
    .addField('**__General Information__**', [
    `Name: ${message.guild.name}`,
    `ID: ${message.guild.id}`,
    `Owner: ${message.guild.owner.user.tag} (${message.guild.ownerID})`,
    `Total Members: ${message.guild.memberCount}`,
    `Humans: ${members.filter(member => !member.user.bot).size}`,
    `Bots: ${members.filter(member => member.user.bot).size}`,
    `Region: ${message.guild.region}`,
    `Created At: ${moment(message.guild.createdTimestamp).format('LT')} ${moment(message.guild.createdTimestamp).format('LL')} ${moment(message.guild.createdTimestamp).fromNow()}`,
    ])
    message.channel.send(sembed)
	},
};