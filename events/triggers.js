const Discord = require('discord.js')
module.exports = {
  name: 'message',
  execute(message) {
    var lowerCaseMessage = message.content.toLowerCase()
    if (!message.author.bot) {
      if (lowerCaseMessage === 'oh no') {
        message.channel.send('anyway')
      }
      
      if (lowerCaseMessage.includes('crab')) {
        message.channel.send('https://www.youtube.com/watch?v=cE0wfjsybIQ')
      }
      
      if (lowerCaseMessage.startsWith('imagine ')) {
        if (lowerCaseMessage.includes('@everyone')) {
          return message.reply('don\'t try to make me ping everyone!')
        }
        const imagineWhat = message.content.split(' ')
        imagineWhat.shift()
        const combined = imagineWhat.join(' ')
        message.channel.send(`I can't even imagine ${combined}, bro`)
      }
      
      if (lowerCaseMessage.includes('gex')) {
		  message.channel.send('Gex, a young anthropomorphic gecko, lives by himself watching TV and eating snacks in his mansion in Maui, Hawaii, which he acquired after inheriting a large sum of money from his uncle that passed away. While looking for a good show to watch, he consumes a passing house fly. This insect turns out to be a small undercover drone being controlled by Rez, the overlord of the Media Dimension. Rez uses the droid to "bug" Gex, and pulls him into the Media Dimension through the TV set, intending to use him as the network\'s new mascot character. In order to escape, Gex needs to traverse the Media Dimension and find remote controls which he could use to destroy the TV sets blockading his exit back to the outside world.\nGex fights his way through the Media Dimension, finding remotes and defeating Rez\' accomplices along the way, before eventually defeating Rez himself using some of the tyrant\'s own drones against him. Gex, upon returning home, resumes watching his TV, wondering what was on HBO.')
      }
    }
  }
}