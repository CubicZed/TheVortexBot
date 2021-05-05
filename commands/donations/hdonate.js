module.exports = {
  name: 'hdonate',
  description: 'Use this command to donate for heists',
  guildOnly: true,
  args: true,
  usage: '<time>/<amount>/<requirements>/<message>',
  execute(message, args) {
    if (message.channel.id !== '795840782518059038') {
      return message.reply('that command can only be used in <#795840782518059038>!')
    }
    const Discord = require('discord.js')
    const joined = args.join(' ')
    const slash = joined.split('/')
    const hdonateEmbed = new Discord.MessageEmbed()
    .setDescription(`<:a_apoint:819714918591889409> **Time**: ${slash[0]}\n<:a_apoint:819714918591889409> **Amount**: ${args[1]}\n<:a_apoint:819714918591889409> **Requirements**: ${args[2]}\n<:a_apoint:819714918591889409> **Message**: ${slash[3]}\n\nKindly accept their donation!`)
    .setColor('#475263')
    
    message.channel.send(`<@&782568309521514496> new donation by ${message.author.username}`, hdonateEmbed)
  }
}