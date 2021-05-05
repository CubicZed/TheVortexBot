module.exports = {
  name: 'purge',
  aliases: ['pu', 'prune', 'delete', 'del'],
  description: 'Deletes the specified amount of messages',
  args: true,
  usage: '<amount>',
  execute(message, args) {
    const Discord = require('discord.js')
    const amountToDelete = parseInt(args[0]) + 1;
    if (message.member.roles.cache.some(role => role.name == 'Staff')) {
      message.channel.bulkDelete(amountToDelete)
    } else {
      message.reply('You do not have permission to do that.\n**Required role:** Staff')
    }
  }
}