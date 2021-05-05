const Discord = require('discord.js')
module.exports = {
  name: 'dono100m',
  args: true,
  usage: '<user>',
  execute(message, args) {
    if (!message.member.roles.cache.some(role => role.name == 'Staff')) {
      return message.reply('you do not have permission to do that.')
    }
    
    const member = message.mentions.members.first()
    const user = message.mentions.users.first()
    const userTag = user.tag
    const roleName = '100m Donator'
    
    const role = message.guild.roles.cache.find(role => role.name === roleName);
    
    if (!role) {
      return message.reply(`there is no role with the name - ${roleName}`)
    }
    
    member.roles.add(role)
    
    const roleEmbed = new Discord.MessageEmbed()
    .setTitle('Donator Role Added')
    .setColor('#75a8c5')
    .setDescription(`Added **100m Donator** to ${user}.\n\nPerks: +2 Amari Levels (Request it in <#817648012913672213>)`)
    
    message.channel.send(roleEmbed)
  }
}