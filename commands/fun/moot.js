module.exports = {
  name: 'moot',
  description: 'MOOT',
  args: true,
  usage: '<user>',
  execute(message, args) {
    if (!message.mentions.users.size) {
      return message.reply(`${message.author.tag} muted themselves infinitely cause they were too stupid to specify a user`)
    }
      const mootedUser = message.mentions.users.first()

  message.channel.send(`${message.author.tag} muted ${mootedUser} infinitely`)
  }
}