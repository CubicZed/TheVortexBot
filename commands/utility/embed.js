const Discord = require('discord.js')

module.exports = {
  name: 'embed',
  aliases: ['em'],
  usage: "<channel> <json>",
  permissions: "",
  description: "Send an embed from json code.",
  execute(message, args) {
    const target = message.mentions.channels.first()

    if (!target) {
      return message.channel.send('Please mention a channel to send.')
    }

    if (!args[1]) return message.channel.send('You need to send the JSON embed code.')

    args.shift()
    const json = JSON.parse(args.join(" "))

  try {
    target.send("", {
      embed: json,
      split: true
    })
  } catch (error) {
    message.channel.send('Invalid JSON Formatting.\nError Message: ' + error.message)
  }
  }
}
