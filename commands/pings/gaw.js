module.exports = {
  name: 'gaw',
  description: 'Used with donators',
  args: true,
  usage: '<donator> <message>',
  execute(message, args) {
    const Discord = require('discord.js');
    
    if (message.member.roles.cache.some(role => role.name == 'Staff')) {
      const donator = args[0]
      args.shift()
      const gawMessage = args.join(' ')
      
      const gawEmbed = new Discord.MessageEmbed()
      .setTitle('🎉 Giveaway 🎉')
      .setDescription(`**Donator:** ${donator}\n**Message:** ${gawMessage}`)
      .setColor('#398aff')
      
      message.channel.send('<@&745910748836003840>\nDon\'t forget to thank the donator in <#751788818776064040>!')
      message.channel.send(gawEmbed)
      message.delete()
    } else {
      message.reply('you do not have permission to do this.\n**Required role:** \`Staff\`')
    }
  }
}