const Discord = require('discord.js')
const Database = require("@replit/database")
const donations = new Database()
module.exports = {
  name: 'donations',
  description: 'View donations by a user, or add donations.',
  aliases: ['dono'],
  args: true,
  usage: '<add, remove, or view> <user> [amount]',
  guildOnly: true,
  execute(message, args) {
    const option = args[0]
    const user = message.mentions.users.first()
    const amount = args[2]
    if (option === 'add') {
      if (!message.member.roles.cache.some(role => role.name === 'Staff')) return message.reply('you do not have permission to do this!')

      if (!message.mentions) return message.reply('you did not mention anyone!')
      const number = parseInt(amount)
      if (isNan(number)) return message.reply('that is not a number!')
      
      const key = donations.get(user)

      if (!key) {
        donations.set(user, { amount: number })
        message.reply(`Added ⏣ ${number} to ${user.tag}'s donations.'`)
      } else {
        const newAmount = key.amount + number
        donations.set(user, { amount: newAmount })
        message.reply(`Added ⏣ ${number} to ${user.tag}'s donations.'`)
      }

    } else if (option === 'remove') {
      if (!message.member.roles.cache.some(role => role.name === 'Staff')) return message.reply('you do not have permission to do this!')
    } else if (option === 'view') {

    }
  }
}