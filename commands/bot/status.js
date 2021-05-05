const Discord = require('discord.js')
module.exports = {
  name: 'status',
  description: 'Sets the bot status',
  args: true,
  usage: '<status>',
  execute(message, args) {
    if (message.member.roles.cache.some(role => role.name == 'Admin')) {
      const statusToSet = args.join(" ");
      message.client.user.setActivity(statusToSet, { type: 'CUSTOM_STATUS' });
    } else {
      message.reply('You do not have permission to do that.\n**Required role:** Admin')
    }
  }
}