const Discord = require('discord.js')
module.exports = {
  name: 'hlog',
  description: 'Logs a heist',
  guildOnly: true,
  args: true,
  usage: '<channel>/<amount (include \`⏣\`)>/<donator>',
  execute(message, args) {
    if (message.member.roles.cache.some(role => role.name == 'Heist Manager','Heist Head', 'Heist Starter', 'Moderator', 'Admin', 'Head Admin')) {
      const joined = args.join(' ')
      const split = joined.split('/')
      let logchannel = message.guild.channels.cache.find((x) => (x.name === "💸﹕heist-log" || x.name === "💸﹕heist-log"))
      
      const hlogEmbed = new Discord.MessageEmbed()
      .setDescription(`**Channel:** ${split[0]}\n**Amount:** ${split[1]}\n**Donator:** ${split[2]}`)
      .setFooter(`Logged by ${message.author.tag}`)
      
      logchannel.send(hlogEmbed)
      message.reply(`Logged the heist to ${logchannel}`)
    } else {
      message.reply('you do not have permission to do this.\n**Required role:** Heist Manager')
    }
  }
}