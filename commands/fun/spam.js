module.exports = {
  name: 'spam',
  description: 'spams',
  guildOnly: true,
  args: true,
  usage: '<amount of messages> <message to spam>',
  execute(message, args) {
    if (message.member.roles.cache.some(role => role.name == 'Admin')) {
      if (message.channel.name === '😈﹕spam') {
      var timesSent = 0
      var timesToSpam = parseInt(args[0])
      args.shift()
      const messageToSpam = args.join(' ')
      
      while (timesSent < timesToSpam) {
        message.channel.send(messageToSpam)
        timesSent++
      }
      
    } else {
     message.reply('that command can only be used in <#752476060125495356>') 
    }
    } else { message.reply('you do not have permission to do that.\n**Required role:** Admin') }
  }
}