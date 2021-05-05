const Discord = require('discord.js')
const fetch = require('node-fetch')
module.exports = {
  name: 'dog',
  description: 'Gets you a random dog',
  async execute(message, args) {
    const dog = await fetch('https://dog.ceo/api/breeds/image/random').then(response => response.json());
    const dogEmbed = new Discord.MessageEmbed()
    .setTitle('Random Dog!')
    .setImage(dog.message)
    .setColor('RANDOM')
    
    message.channel.send(dogEmbed)
  }
}