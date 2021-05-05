const Discord = require('discord.js')
const ms = require('ms')
module.exports = {
  name: 'remind',
  aliases: ['alert', 'reminder', 'remind-me'],
  description: 'Sets a reminder for you',
  guildOnly: true,
  args: true,
  usage: '<time, no spaces> <what to be reminded of>',
  execute(message, args) {
    const time = ms(args[0])
    message.reply(`I will remind you in ${args[0]}!`)
    args.shift()
    const reminder = args.join(' ')
    function timetest() {
      message.reply(`**Your reminder for:** \'${reminder}\' **is done!**`)
    }
    setTimeout(timetest, time)
  }
}