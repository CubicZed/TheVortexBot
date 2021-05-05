module.exports = {
  name: 'eping',
  description: 'Pings the Event Ping',
  execute(message, args) {
    if (message.member.roles.cache.some(role => role.name == 'Staff')) {
      message.channel.send('<@&806390775348330558>');
      message.delete();
    } else {
      message.reply('you do not have permission to do that.\n**Required role:** Staff')
    }
  }
}