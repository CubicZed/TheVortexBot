const fetch = require('node-fetch');
const Discord = require('discord.js')
module.exports = {
  name: 'clyde',
  description: 'Sends your message as clyde',
  async execute(message, args) {
    fetch(`https://nekobot.xyz/api/imagegen?type=clyde&text=${args.join(' ')}`)
      .then((res) => res.json())
      .then((data) => {
        message.channel.send(data.message)
      })
  }
}