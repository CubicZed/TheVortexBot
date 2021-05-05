const Discord = require('discord.js')
const fetch = require('node-fetch')
module.exports = {
  name: 'meme',
  description: 'Gets a random meme from Reddit',
  async execute(message, args) {
    const reddit = await fetch('https://meme-api.herokuapp.com/gimme').then(response => response.json());
    if (reddit.nsfw) {
      return message.reply('the meme that I have found is NSFW')
    }
    const memeEmbed = new Discord.MessageEmbed()
    .setAuthor(reddit.author)
    .setTitle(reddit.title)
    .setURL(reddit.url)
    .setDescription(`r/${reddit.subreddit}`)
    .setImage(reddit.preview[4])
    
    message.channel.send(memeEmbed)
    
  }
}