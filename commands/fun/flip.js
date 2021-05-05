module.exports = { 
  name: "flip",
  aliases: ['flip'],
  description: "flips your text",
  args: true,
  usage: '<message to say>',
  execute(message, args) {
    const Discord = require('discord.js');
    const Flip = require('flip-text');
    const messageToSay = args.join(" ")
    if(!args.length) {
      return message.channel.send("Please Provide Something to Say")
    }
      message.channel.send(Flip(messageToSay));
    }
  }


