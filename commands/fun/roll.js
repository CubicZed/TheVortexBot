module.exports = {
  name: 'roll',
  aliases: ['dice', 'diceroll', 'roll-dice'],
  description: 'Rolls a number between 1 and 6.',
  execute(message, args) {
    var dices = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅']
    var dice = dices[Math.floor(Math.random() * 6)];
    message.reply(`You rolled a **${dice}**!`)
  }
} 