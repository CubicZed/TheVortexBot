const Discord = require('discord.js')
module.exports = {
  name: 'showtopartner',
  aliases: ['stp'],
  description: 'Sends a message to the user who\'s ID is specified with directions on how to send a partnership request.',
  guildOnly: true,
  args: true,
  usage: '<user id>',
  execute(message, args) {
    if (!message.member.roles.cache.some(role => role.name === 'Staff')) return message.reply('you do not have permission to do this!')

    const id = args[0]
    const member = message.guild.members.cache.find(mem => mem.id === id)

    if (!member) return message.reply('that is not an ID of a member!')

    const stpEmbed = new Discord.MessageEmbed()
    .setTitle('How to Partner with Us')
    .setDescription('One of our staff members')
  }
}