const Discord = require('discord.js')
module.exports = {
  name: 'execute',
  aliases: ['e', 'evaluate', 'eval'],
  description: 'Runs a console command on the bot code',
  guildOnly: true,
  args: true,
  usage: '<command>',
  execute(message, args) {
    if (!message.member.roles.cache.some(role => role.name == 'Bot Developer')) {
      return message.reply('you do not have permission to do this!\nThis is because this command runs a console command on the bot code, which is why only Bot Developers can use this.\n**Required role:** Bot Developer')
    }
    message.react('⚠️')
    const commandToRun = args.join(' ')
    eval(commandToRun)
  }
}