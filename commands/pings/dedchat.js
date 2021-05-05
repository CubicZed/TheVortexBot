const dcping = 
module.exports = {
  name: 'crping',
  aliases: ['cr'],
  description: 'Pings the Chat Revive Ping',
  execute(message, args) {
    // this perm is just for testing
    if (message.member.roles.cache.some(role => role.name == 'Staff')) {
      message.channel.send('<@&818755538249711657>');
      message.delete();
    } else {
      message.reply('you do not have permission to do that.\n**Required role:** Staff')
    }
  }
}