const Discord = require('discord.js')
module.exports = {
  name: 'dono50m',
  args: true,
  usage: '<user>',
  execute(message, args) {
    if (!message.member.roles.cache.some(role => role.name == 'Staff')) {
      return message.reply('you do not have permission to do that.')
    }
    
    const member = message.mentions.members.first()
    const user = message.mentions.users.first()
    const userTag = user.tag
    const roleName = '50m Donator'
    
    const role = message.guild.roles.cache.find(role => role.name === roleName);
    
    if (!role) {
      return message.reply(`there is no role with the name - ${roleName}`)
    }
    
    member.roles.add(role)
    
    const roleEmbed = new Discord.MessageEmbed()
    .setTitle('Donator Role Added')
    .setColor('#649ab9')
    .setDescription(`Added **50m Donator** to ${user}.\n\nPerks: Access to Audit Log`)
    
    message.channel.send(roleEmbed)
  }
}