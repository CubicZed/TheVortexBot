module.exports = {
  name: 'unlock',
  description: 'Unlocks the channel in which it was sent in',
  execute(message, args) {
    if (message.member.roles.cache.some(role => role.name == 'Admin','Head Admin')) {
      let channel = message.channel
      channel.updateOverwrite(channel.guild.roles.everyone, { SEND_MESSAGES: true });
    } else { message.reply('you do not have permission to do that.\n**Required role:** Admin') }
  }
}