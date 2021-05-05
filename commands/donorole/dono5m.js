const Discord = require('discord.js')
module.exports = {
  name: 'dono5m',
  args: true,
  usage: '<user>',
  execute(message, args) {
    if (!message.member.roles.cache.some(role => role.name == 'Staff')) {
      return message.reply('you do not have permission to do that.')
    }
    
    const member = message.mentions.members.first()
    const user = message.mentions.users.first()
    const userTag = user.tag
    const roleName = '5m Donator'
    const perkRole = 'DJ'
    
    const role = message.guild.roles.cache.find(role => role.name === roleName);
    const perk = message.guild.roles.cache.find(role => role.name === perkRole);
    
    if (!role) {
      return message.reply(`there is no role with the name - ${roleName}`)
    }
    
    member.roles.add(role)
    member.roles.add(perk)
    
    const roleEmbed = new Discord.MessageEmbed()
    .setTitle('Donator Role Added')
    .setColor('#4b7791')
    .setDescription(`Added **5m Donator** to ${user}.\n\nPerks: <@&816204570505904158> role given`)
    
    message.channel.send(roleEmbed)
  }
}