module.exports = {
  name: 'hping',
  description: 'Pings the heist ping. Message optional',
  usage: '<message>',
  execute(message, args) {
    if (message.member.roles.cache.some(role => role.name == 'Staff')) {
      if (!args.length) {
        message.channel.send('<@&745168135925268561>')
        message.delete()
      } else {
        const messageToSay = args.join(' ')
        message.channel.send(`<@&745168135925268561> ${messageToSay}`)
      }
    } else {
      message.reply('you do not have permission to do that.\n**Required role:** Staff')
    }
  }
}