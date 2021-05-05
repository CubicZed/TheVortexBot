const Discord = require('discord.js')
module.exports = {
  name: 'close',
  description: 'Closes a modmail ticket',
  usage: '[reason]',
  guildOnly: true,
  execute(message, args) {
     if (!message.member.roles.cache.some(role => role.name == 'Staff')) return message.reply('you do not have permission to do this!')

    const topic = message.channel.topic

    const member = message.guild.members.cache.find(mem => mem.id === topic)

    if (!member) {
      return message.reply('this channel is not a ticket channel!')
    }

    let reason = args.join(' ')
    
    if (!reason.length) reason = 'No reason was provided.'

    const user = member.user

    const logChannel = message.guild.channels.cache.find(log => log.id === '836595487380602889')

    const logEmbed = new Discord.MessageEmbed()
    .setTitle('Ticket Closed')
    .setDescription(reason)
    .setFooter(`${user.tag} | ${user.id}`, user.avatarURL())
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setTimestamp()
    .setColor('#fd0200')
    
    const closeUser = new Discord.MessageEmbed()
    .setTitle('Ticket Closed')
    .setDescription(`Thank you for contacting the Vortex. Our staff have deemed this ticket finished and the ticket has been closed.\nReason: ${reason}`)
    .setFooter(`${message.guild.name} | ${message.guild.id}`, message.guild.iconURL())
    .setTimestamp()
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setColor('#fd0200')

    logChannel.send(logEmbed)
    user.send(closeUser)
    message.channel.delete()
  }
}