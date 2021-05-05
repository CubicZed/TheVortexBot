module.exports = {
  name: 'pping',
  description: 'Pings the Partnership Ping',
  execute(message, args) {
    if (!message.member.roles.cache.some(role => role.name == 'Staff')) {
      return message.reply('you do not have permission to do that!\n**Required role:** Staff')
    } 
    message.channel.send('<@&794463023547809794>')
    message.delete()
  }
}