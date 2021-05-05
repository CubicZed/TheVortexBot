module.exports = {
  name: 'announce',
	description: 'Announces to <#751789716025770085>',
	guildOnly: true,
	permissions: 'ADMINISTRATOR',
	args: true,
	usage: '<message to announce>',
	execute(message, args) {
	  const Discord = require('discord.js')
	  const announcement = args.join(' ')
	  let announcementChannel = message.guild.channels.cache.find((x) => (x.name === "📢﹕updates" || x.name === "📢﹕updates"))
	  
	  const announceEmbed = new Discord.MessageEmbed()
	  .setTitle('📢 New Announcement 📢')
	  .setAuthor(message.author.tag, message.author.avatarURL())
	  .setDescription(announcement)
	  .setTimestamp()
	  
	  message.reply('Sent your announcement to <#751789716025770085>')
	  announcementChannel.send('<@&742280722836095026>', announceEmbed)
	}
}