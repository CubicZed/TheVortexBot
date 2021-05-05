const Discord = require('discord.js')
const math = require('mathjs')
module.exports = {
  name: 'math',
  aliases: ['mafs', 'calculate', 'calc'],
  description: 'calculates the given expression',
  guildOnly: true,
  args: true,
  usage: '<expression>',
  execute(message, args) {
    var expression = args.join('')
    var rawAnswer = math.evaluate(expression)
    var answer = Math.round(rawAnswer)

    
    const mathEmbed = new Discord.MessageEmbed()
    .setTitle('Calculator')
    .setDescription(`**Answer:** \`${answer}\`\n**Raw Answer:** \`${rawAnswer}\``)
    .setColor('RANDOM')
    
    message.channel.send(mathEmbed)
  }
}