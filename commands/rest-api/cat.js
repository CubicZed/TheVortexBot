const fetch = require('node-fetch');
const Discord = require('discord.js')
module.exports = {
  name: 'cat',
  description: 'Sends a picture of a random cat',
  async execute(message, args) {
    const { file } = await fetch('https://aws.random.cat/meow').then(response => response.json());
    const catEmbed = new Discord.MessageEmbed()
    .setTitle('Random Cat!')
    .setImage(file)
    .setColor('RANDOM')
    message.channel.send(catEmbed);
  }
}