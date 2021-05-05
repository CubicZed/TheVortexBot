module.exports = {
  name: 'vouch',
  description: 'vouches for a person',
  guildOnly: true,
  args: true,
  usage: '<member> <reason>',
  execute(message, args) {
    const Discord = require('discord.js')
    
    const vouched = message.mentions.members.first()
    args.shift()
    const reason = args.join(' ')
    
    const vouchEmbed = new Discord.MessageEmbed()
    .setTitle(`${message.author.tag}'s Vouch`)
    .setColor('#74f67b')
    .setDescription(`**Vouched** - ${vouched}\n**Reason** - ${reason}`)
    .setTimestamp()
    
    message.channel.send(vouchEmbed)
  }
}


// i was gonna do that