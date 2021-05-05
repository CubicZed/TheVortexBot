module.exports = {
  name: 'tax',
  aliases: ['tc'],
  description: 'Taxes the amount given',
  args: true,
  usage: '<amount to be taxed>',
  execute(message, args) {
    const Discord = require('discord.js')
    
    const taxDMC = Math.round(parseInt(args[0]))
    const taxedAmount = Math.round(taxDMC * 0.08)
    const userGets = taxDMC - taxedAmount
    const amountToGive = Math.round(taxDMC / 0.92)
    
    const taxEmbed = new Discord.MessageEmbed()
    .setTitle('Dank Memer Tax Calculator')
    .setDescription(`Amount user gets: \`⏣ ${userGets}\`\nAmount lost to tax: \`⏣ ${taxedAmount}\`\nAmount expected to pay: \`⏣ ${amountToGive}\``)
    .setColor('GREEN')
    .setFooter('TAX RATE: 8%')
    
    message.channel.send(taxEmbed)
  }
}
// lmao %5 tax on everything