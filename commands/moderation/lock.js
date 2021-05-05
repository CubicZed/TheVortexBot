module.exports = {
  name: 'lock',
  aliases: ['lockdown'],
  description: ['Locks the channel in which the message was sent'],
  execute(message, args) {
    if (message.member.roles.cache.some(role => role.name == 'Moderator','Admin','Head Admin')) {
      let channel = message.channel
      channel.updateOverwrite(channel.guild.roles.everyone, { SEND_MESSAGES: false });
    } else { message.reply('you do not have permission to do that.\n**Required role:** Admin') }
  }
}