const Discord = require('discord.js')
module.exports = {
  name: 'resetdono',
  args: true,
  usage: '<user>',
  execute(message, args) {
    if (!message.member.roles.cache.some(role => role.name == 'Staff')) {
      return message.reply('you do not have permission to do that.')
    }
    message.reply('This might take a second for those with more roles.')
    
    const member = message.mentions.members.first()
    
    member.roles.remove(message.guild.roles.cache.find(role => role.name === '1m Donator'))
    member.roles.remove(message.guild.roles.cache.find(role => role.name === '3m Donator'))
    member.roles.remove(message.guild.roles.cache.find(role => role.name === '5m Donator'))
    member.roles.remove(message.guild.roles.cache.find(role => role.name === '10m Donator'))
    member.roles.remove(message.guild.roles.cache.find(role => role.name === '25m Donator'))
    member.roles.remove(message.guild.roles.cache.find(role => role.name === '50m Donator'))
    member.roles.remove(message.guild.roles.cache.find(role => role.name === '100m Donator'))
    member.roles.remove(message.guild.roles.cache.find(role => role.name === '250m Donator'))
    member.roles.remove(message.guild.roles.cache.find(role => role.name === '500m Donator'))
    member.roles.remove(message.guild.roles.cache.find(role => role.name === '1B Donator'))
    
    const removeEmbed = new Discord.MessageEmbed()
    .setTitle('Donator Roles Reset')
    .setColor('#36393e')
    .setDescription(`All donator roles of ${member.user} have been cleared.`)
    
    message.channel.send(removeEmbed)
  }
}