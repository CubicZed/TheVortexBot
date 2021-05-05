module.exports = { 
  name: "reverse",
  description: "reverses your text",
  args: true,
  usage: '<message to say>',
  execute(message, args) {
    const Discord = require('discord.js');
    const messageToSay = args.join(" ")
    if(!args.length) {
      return message.channel.send("Please Provide Something to Say")
    }
      let reverse = messageToSay.split("")
      let reverse2 = reverse.reverse()
      let text = reverse2.join("")
      message.channel.send(text)
    }
  }


