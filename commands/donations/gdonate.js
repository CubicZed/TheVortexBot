module.exports = {
  name: 'gdonate',
  description: 'Use this command to donate for giveaways',
  guildOnly: true,
  args: true,
  usage: '<time>/<prize>/<winners>/<requirements>/<message>',
  execute(message, args) {
    if (message.channel.id !== '775615213672202250') {
      return message.reply('that command can only be used in <#775615213672202250>!')
    }
    const Discord = require('discord.js')
    const joined = args.join(' ')
    const slash = joined.split('/')
    const gdonateEmbed = new Discord.MessageEmbed()
    .setDescription(`<:a_apoint:819714918591889409> **Time**: ${slash[0]}\n<:a_apoint:819714918591889409> **Prize**: ${slash[1]}\n<:a_apoint:819714918591889409> **Winners**: ${slash[2]}\n<:a_apoint:819714918591889409> **Requirements**: ${slash[3]}\n<:a_apoint:819714918591889409> **Message**: ${slash[4]}\n\nKindly accept their donation!`)
    .setColor('#475263')
    
    message.channel.send(`<@&782567238200328196> new donation by ${message.author.username}`, gdonateEmbed)
  }
}