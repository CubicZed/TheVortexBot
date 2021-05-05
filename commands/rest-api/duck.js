const fetch = require('node-fetch');
const Discord = require('discord.js')
module.exports = {
  name: 'duck',
  description: 'HAHA FUNNY DUCK',
  async execute(message, args) {
    const { url } = await fetch('https://random-d.uk/api/v1/random').then(response => response.json());
    const duckEmbed = new Discord.MessageEmbed()
    .setTitle('DUCK GO BR BR STONKS')
    .setImage(url)
    .setColor('RANDOM')
    message.channel.send(duckEmbed);
  }
}
