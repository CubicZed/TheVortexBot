module.exports = {
  name: 'ohping',
  description: 'Pings the Outside Heist Ping',
  execute(message, args) {
    if (message.member.roles.cache.some(role => role.name == 'Staff')) {
      message.channel.send('<@&799577270872309782>')
      message.delete()
    } else {
      message.reply('You do not have permission to do that.\n**Required role:** Staff')
    }
  }
}