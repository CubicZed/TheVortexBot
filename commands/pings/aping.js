const dcping = 
module.exports = {
  name: 'aping',
  description: 'Pings the Annoucement Ping',
  execute(message, args) {
    // this perm is just for testing
    if (message.member.roles.cache.some(role => role.name == 'Staff')) {
      message.channel.send('<@&742280722836095026>');
      message.delete();
    } else {
      message.reply('you do not have permission to do that.')
    }
  }
}