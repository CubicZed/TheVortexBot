const Discord = require('discord.js')
module.exports = {
  name: 'force',
  description: 'Forces a modmail to open with a user.',
  guildOnly: true,
  args: true,
  usage: '<user>',
  execute(message, args) {
    if (!message.member.roles.cache.some(role => role.name === 'Staff')) return message.reply('you do not have permission to do this!')

    if (!message.mentions) return message.reply('you need to mention a user!')

    const user = message.mentions.users.first()

    const channel = message.guild.channels.cache.find(chan => chan.topic === user.id)

    if (channel) return message.reply(`there is already an open ticket with ${user.tag}! Channel: ${channel}`)

    //Embeds Here
    const reminder = new Discord.MessageEmbed()
    .setTitle('New Modmail Ticket.')
    .setDescription('The Vortex created a ticket with you. To send messages, or to reply to any message that we sent, please use the \`;ticket\` command, or its alias: \`;t\`.')
    .setColor('#1e90ff')
    .setFooter(`${message.guild.name} | ${message.guild.id}`, message.guild.iconURL())
      
    const logChannel = message.guild.channels.cache.find(log => log.id === '836595487380602889')

    const newTicket = new Discord.MessageEmbed()
    .setTitle('New Ticket')
    .setDescription('Send \`;reply <message>\` in this channel to reply. To send an anonymous reply, use \`;areply\`. Messages sent in this channel that are not the reply command are ignored, and can be used for staff discussion. Use the command \`;close [reason]\` to close this ticket.')
    .setColor('#1e90ff')
    .setFooter(`${user.tag} | ${user.id}`, user.avatarURL())

    const logEmbed = new Discord.MessageEmbed()
    .setTitle('New Ticket')
    .setFooter(`${user.tag} | ${user.id}`, user.avatarURL())
    .setTimestamp()
    .setColor('#01ff02')
    
    message.guild.channels.create(`${user.username} ${user.discriminator}`).then(chann => {
      chann.setParent('836595048111013978');
			chann.setTopic(user.id)
      chann.lockPermissions()

      logChannel.send(logEmbed)
      user.send(reminder)
      chann.send(newTicket)
      message.channel.send(`**Ticket Created:** ${chann}`)
    })
  }
}