const { prefix } = require('../../config.json');
module.exports = {
  name: 'reset-status',
  aliases: ['rs'],
  description: 'Resets the bot status',
  execute(message, args) {
    if (message.member.roles.cache.some(role => role.name == 'Admin')) {
      message.client.user.setActivity(`${prefix}help`, { type: 'LISTENING' });
    } else { 
    message.reply('You do not have permission to do that.\n**Required permission:** Admin')
    }
  }
}