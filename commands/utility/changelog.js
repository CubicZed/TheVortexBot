const Discord = require('discord.js')
module.exports = {
  name: 'changelog',
  description: 'Posts to the changelog',
  args: true,
  usage: '<add or remove> <details>',
  execute(message, args) {
    if (!message.member.roles.cache.some(role => role.id === '838840228512792826')) return message.reply('you do not have permission to do this!')

    const option = args[0]

    if (option === 'add') {
      const title = '<:plus:838969429287108618> Feature Added'
      const color = 'GREEN'
      args.shift()

    const embed = new Discord.MessageEmbed()
    .setTitle(title)
    .setDescription(args.join(' '))
    .setTimestamp()
    .setColor(color)

    const channel = message.guild.channels.cache.find(c => c.id === '838783789177241670')

    channel.send(embed)
    message.reply('I have sent the update to the changelog!')
    } else if (option === 'remove') {
      const title = '<:minus:838969264505225247> Feature Removed'
      const color = 'RED'

      args.shift()

    const embed = new Discord.MessageEmbed()
    .setTitle(title)
    .setDescription(args.join(' '))
    .setTimestamp()
    .setColor(color)

    const channel = message.guild.channels.cache.find(c => c.id === '838783789177241670')

    channel.send(embed)
    message.reply('I have sent the update to the changelog!')
    } else {
      return message.reply('that is not an option!')
    }
  }
}