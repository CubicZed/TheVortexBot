const Discord = require('discord.js')
module.exports = {
  name: 'donorole',
  description: 'Gets the donorole help',
  guildOnly: true,
  execute(message, args) {
    if (!message.member.roles.cache.some(role => role.name == 'Staff')) {
      return message.reply('you do not have permission to do that.')
    }
    const donoroleEmbed = new Discord.MessageEmbed()
    .setTitle('How to add Donator Roles')
    .setDescription('Syntax: `;dono(role amount) @user `\nExample:\n```;dono5m @MultiverShaun```')
    .addFields(
      { name: 'How to remove Donator Roles', value: 'Syntax: `;resetdono @user `\nExample:\n```;resetdono @MultiverShaun```' }
    )
    
    message.channel.send(donoroleEmbed)  
  }
}