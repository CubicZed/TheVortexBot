module.exports = {
  name: 'bet',
  args: true,
  usage: '<how much to bet>',
  execute(message, args, name) {
    const Discord = require('discord.js')
    const amountBet = Math.round(parseInt(args[0]))
    const amountWon = Math.round(amountBet * 2.34213)



    const WinningEmbed = new Discord.MessageEmbed()
    .setTitle(`**${message.author.username}'s winning gambling game**`)
    .setAuthor(url=`${message.author.url}`)
    .setDescription(`You won **⏣${amountWon}** \n\n**Percent Won**: 200% \n**New Balance**: ⏣${amountWon}`)
    .setColor('GREEN')
    .addFields(
		{ name: `${message.author.username}`, value: 'Rolled `8`', inline: true },
		{ name: 'Dankmemer', value: 'Rolled `3`', inline: true },
	)
    
    message.channel.send(WinningEmbed)
  }
}