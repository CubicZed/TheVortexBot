const Discord = require('discord.js')
module.exports = {
  name: 'credits',
  description: 'Displays the people who have contributed to the bot.',
  execute(message, args) {
    const creditEmbed = new Discord.MessageEmbed()
    .setTitle('Credits')
    .addFields(
      { name: 'Programmers:', value: 'Cubic Z\nyoda\nSandy\nZmacky' },
      { name: 'Profile Picture', value: 'Pixel Tactix' }
	  )
    
    message.channel.send(creditEmbed)
  }
}