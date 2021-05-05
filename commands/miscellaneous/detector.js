
module.exports = {
  name: 'detector',
  aliases: ['rate', 'r8'],
  description: 'returns how ____ you are',
  args: true,
  usage: '<what to rate>',
  execute(message, args) {
    const Discord = require('discord.js')
    const percentage = Math.floor(Math.random() * 100)
    const toRate = args.join(' ')
    const detectEmbed = new Discord.MessageEmbed()
    .setTitle(`${message.author.username}\'s ${toRate} Rate`)
    .setDescription(`You are ${percentage}% ${toRate}, ${message.author}!`)
    .setColor('RANDOM')
    
    message.channel.send(detectEmbed)
  }
}