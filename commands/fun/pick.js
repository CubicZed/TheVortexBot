module.exports = {
  name: 'pick',
  description: 'Picks a random given item',
  args: true,
  usage: '<spaces to seperate different items>',
  execute(message, args) {
    var chosenPick = args[Math.floor(Math.random() * args.length)];
    message.reply(`I pick ${chosenPick}`)
  }
}