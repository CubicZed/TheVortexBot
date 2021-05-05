const Discord = require('discord.js')
module.exports = {
  name: 'event',
  description: 'Sends an embed with the event ping',
  guildOnly: true,
  args: true,
  usage: '<event>/<prize>/<@sponsor>',
  execute(message, args) {
    if (message.member.roles.cache.some(role => role.name == 'Event Manager')) {
      const joined = args.join(' ')
      const split = joined.split('/')
      
      const epicEmbed = new Discord.MessageEmbed()
      .setTitle("<:v_medal_item:818682513395679244>  ─── [ **Event Time** ] ─── <:v_medal_item:818682513395679244>")
      .setDescription(` ‏‏‎ ‎‏‏‎ ‎\n <:v_apoint:819714918591889409> **Event Type:**  ${split[0]}\n\n <:v_apoint:819714918591889409> **Prize:**  ${split[1]}\n\n<:v_apoint:819714918591889409> **Sponsored By:**  ${split[2]}\n\n`)
      .setFooter(`Remember to thank the sponsor in general chat`)
      .setColor("E91E63")
      
      message.channel.send(epicEmbed)
      message.channel.send('<@&806390775348330558> Thank when?')
    } else {
      message.reply('you do not have permission to do this.\n**Required role:** Event Manager')
    }
  }
}