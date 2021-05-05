module.exports = {
  name: 'heist',
  description: 'Makes a heist ping. Includes amount and time left',
  args: true,
  usage: '<amount> <time left>',
  execute(message, args) {
    const Discord = require('discord.js')
    if (message.member.roles.cache.some(role => role.name == 'Staff')) {
     const amount = args[0]
     args.shift()
     const timeLeft = args.join(' ')
     
     const heistEmbed = new Discord.MessageEmbed()
     .setTitle('Heist Reminders')
     .setColor('#00d4ff')
     .setAuthor('The Vortex', 'https://cdn.discordapp.com/attachments/800575718437290004/810761334446620692/vortexani.gif')
     .setTimestamp()
     .setDescription(`• Remember to withdraw at least 2000 in one of the dank memer channels.\n• Bring a life saver if your wallet is fat to prevent coin loss, however joining with a fat wallet is not advisable in the first place.\n• Remember to turn off passive\nGood Luck!\n\`\`\`Amount - ${amount}\nTime left - ${timeLeft}\`\`\``)
     
     message.channel.send('<@&745168135925268561> time for a heist!')
     message.channel.send(heistEmbed).then(heistEmbed => {
      heistEmbed.react("💰")
     })
     message.delete()
     
    } else {
      message.reply('You do not have permission to do this.\n**Required role:** Staff')
    } 
  }
}