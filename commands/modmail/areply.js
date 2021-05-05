const Discord = require('discord.js')
module.exports = {
  name: 'areply',
  aliases: ['ar'],
  description: 'Anonymously reply to a ticket.',
  guildOnly: true,
  args: true,
  usage: '<message>',
  execute(message, args) {
    if (!message.member.roles.cache.some(role => role.name == 'Staff')) return message.reply('you do not have permission to do this!')

    const topic = message.channel.topic

    const member = message.guild.members.cache.find(mem => mem.id === topic)

    if (!member) {
      return message.reply('this channel is not a ticket channel!')
    }

    const user = member.user

    const guildSent = new Discord.MessageEmbed()
    .setTitle('Anonymous Message Sent')
    .setDescription(args.join(' '))
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setColor('#ff4401')
    .setFooter(`${user.tag} | ${user.id}`, user.avatarURL())
    .setTimestamp()

    const userSend = new Discord.MessageEmbed()
    .setTitle('Message Received')
    .setDescription(args.join(' '))
    .setAuthor('Anonymous')
    .setColor('#ff4401')
    .setFooter(`${message.guild.name} | ${message.guild.id}`, message.guild.iconURL())
    .setTimestamp()

    user.send(userSend)
    message.channel.send(guildSent)
    message.delete()
  }
}