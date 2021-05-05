const userVars = new Map()
module.exports = {
  name: 'user-variables',
  aliases: ['uv'],
  description: 'Testing user variables',
  args: true,
  usage: '<user> <description>',
  execute(message, args) {
    const option = args[0]
    if (option === 'set') {
      args.shift()
      const user = message.mentions.users.first()
      args.shift()
      const description = args.join(' ')
      userVars.set(user, { description: description })
      message.channel.send('I have added that as a key!')
    } else if (option === 'get') {
      args.shift()
      const user = message.mentions.users.first()
      const userVariable = userVars.get(user)
      if (!userVariable) {
        return message.reply('No key exists!')
      }
      message.channel.send(userVariable.description)
    } else {
      message.reply('that is not an option!')
    }
  }
}