const fetch = require('node-fetch')
const Discord = require('discord.js')
module.exports = {
  name: 'fox',
  description: 'Gets a random picture of a fox',
  async execute(message, args) {
    const { image } = await fetch('https://randomfox.ca/floof/').then(response => response.json());
    const foxEmbed = new Discord.MessageEmbed()
    .setTitle('Fox go BRRRR')
    .setImage(image)
    .setColor('RANDOM')
    
    message.channel.send(foxEmbed)
  }
}