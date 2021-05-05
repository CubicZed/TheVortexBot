const fetch = require('node-fetch');
const Discord = require('discord.js')
module.exports = {
  name: 'tweet',
  description: 'Tweets something',
  async execute(message, args) {
    fetch(`https://nekobot.xyz/api/imagegen?type=tweet&username=${message.author.username}&text=${args.join(' ')}`)
      .then((res) => res.json())
      .then((data) => {
        const tweetEmbed = new Discord.MessageEmbed()
          .setImage(data.message)
          .setColor('RANDOM')
        message.channel.send(tweetEmbed);
      })
  }
}