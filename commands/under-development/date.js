module.exports = {
  name: 'time',
  aliases: ['date'],
  description: 'Gives the time',
  execute(message, args) {
    const Discord = require('discord.js')
    const date = new Date()
    const dateEmbed = new Discord.MessageEmbed()
    .setTitle('Current Time')
    .setDescription(date)
    .setColor('RANDOM')
    
    message.channel.send(dateEmbed)
  }
}