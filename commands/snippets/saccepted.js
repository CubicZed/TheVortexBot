const Discord = require('discord.js')
module.exports = {
  name: 'staffapp',
  description: 'Sends an \'accepted\' message',
  guildOnly: true,
  args: true,
  usage: '<"accept" or "deny"> <user id> [reason]',
  execute(message, args) {
    if (!message.member.roles.cache.some(role => role.id === '752148824016945282')) return message.reply('you do not have permission to do this!')
    const option = args[0].toLowerCase()
    if (option === 'accept') {
      const member = message.guild.members.cache.find(mem => mem.id === args[1])
      if (!member) return message.reply('that is not an ID of a user!')

      const acceptEmbed = new Discord.MessageEmbed()
      .setTitle('Staff Application Accepted')
      .setAuthor(message.author.tag, message.author.avatarURL())
      .setDescription(`**Congratulations** ${member.user.tag}! Your staff application in ${message.guild.name} has been **accepted** and you will be roled shortly`)
      .setTimestamp()
      .setFooter(`${message.guild.name} | ${message.guild.id}`, message.guild.iconURL())
      .setColor('#01ff02')

      member.user.send(acceptEmbed)
      message.reply(`I have sent the **"Staff Application Accepted"** message to **${member.user.tag}**.`)

    } else if (option === 'deny') {
      const member = message.guild.members.cache.find(mem => mem.id === args[1])
      if (!member) return message.reply('that is not an ID of a user!')

      let reason = args[2]
      if (!reason.length) reason = 'No reason was provided.'

      const denyEmbed = new Discord.MessageEmbed()
      .setTitle('Staff Application Denied')
      .setAuthor(message.author.tag, message.author.avatarURL())
      .setDescription(`Sorry, but your staff application has been **denied**.\n**Reason:** ${reason}`)
      .setTimestamp()
      .setFooter(`${message.guild.name} | ${message.guild.id}`, message.guild.iconURL())
      .setColor('#fd0200')

       member.user.send(denyEmbed)
       message.reply(`I have sent the **"Staff Application Denied"** message to **${member.user.tag}**.`)
    } else {
      message.reply('that is not an option!')
    }
  }
}