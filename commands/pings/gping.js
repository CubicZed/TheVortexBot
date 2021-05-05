module.exports = {
  name: 'gping',
  description: 'Pings the Giveaway Ping',
  execute(message, args) {
    if (message.member.roles.cache.some(role => role.name == 'Staff')) {
      message.channel.send('<@&745910748836003840>');
      message.delete();
    } else {
      message.reply('you do not have permission to do that.\n**Required role:** Staff')
    }
  }
}