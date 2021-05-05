module.exports = {
  name: "random",
  aliases: ['rnd'],
  description: "returns a random number",
  args: true,
  usage: '<minimum nuber> <maximum number>',
  execute(message, args) {
    var minim = parseInt(args[0])
    var maxim = parseInt(args[1])
    var randomNum = Math.floor(Math.random() * (maxim - minim + 1)) + minim
    message.channel.send(`Your random number is **${randomNum}**`)
  }
}