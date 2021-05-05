const Discord = require('discord.js')
module.exports = {
  name: 'dono3m',
  args: true,
  usage: '<user>',
  execute(message, args) {
    if (!message.member.roles.cache.some(role => role.name == 'Staff')) {
      return message.reply('you do not have permission to do that.')
    }
    
    const member = message.mentions.members.first()
    const user = message.mentions.users.first()
    const userTag = user.tag
    const roleName = '3m Donator'
    
    const role = message.guild.roles.cache.find(role => role.name === roleName);
    if (!role) {
      return message.reply(`there is no role with the name - ${roleName}`)
    }
    
    member.roles.add(role)
    
    const roleEmbed = new Discord.MessageEmbed()
    .setTitle('Donator Role Added')
    .setColor('#476e8a')
    .setDescription(`Added **3m Donator** to ${user}.\n\nPerks: None`)
    
    message.channel.send(roleEmbed)
  }
}