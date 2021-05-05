const Discord = require('discord.js');
module.exports = {
  name: 'break',
  description: 'Request a break (Remember to seperate arguments using `|`)',
  guildOnly: true,
  args: true,
  usage: '<date till return>|<reason>',
  execute(message, args) {
    if (!message.member.roles.cache.some(role => role.name == 'Staff')) return message.reply('you do not have permission to do this!')
    const Args = args.join(' ').split('|')
    const [date, reason] = Args
    if (!date.length || !reason.length) return message.reply('you did not provide enough arguments!')
    const channel = message.guild.channels.cache.find(channel => channel.id === '831157983354028072')
    const role = message.member.roles.highest
    
    const breakEmbed = new Discord.MessageEmbed()
    .setTitle('New Break Request')
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setDescription(`**Username:** ${message.author}\n**Role:** ${role}\n**Date till Return:** ${date}\n**Reason:** ${reason}`)
    .setTimestamp()
    
    const confirmation = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setTitle('I have sent your request for a break!')
    .setDescription(`Your request has been sent to ${channel}, ${message.author}! Please wait to see if it will be accepted.`)
    .setTimestamp()
    
    channel.send(breakEmbed)
    message.channel.send(message.author, confirmation)
  }
}