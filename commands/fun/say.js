module.exports = { 
  name: "say",
  aliases: ['repeat'],
  description: "Says something",
  args: true,
  usage: '<message to say>',
  execute(message, args) {
    const Discord = require('discord.js');
    const messageToSay = args.join(" ")
    if(!args.length) {
      return message.channel.send("Please Provide Something to Say")
    }
    var joinedars = args.join(" ")
    if (message.member.roles.cache.some(role => role.name == 'Admin')) {
      message.channel.send(messageToSay)
    } else {
      message.reply('you do not have permission to do this.\n**Required role:** Admin')
    }
  }}


