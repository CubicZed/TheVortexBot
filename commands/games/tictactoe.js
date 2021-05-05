const { tictactoe } = require("reconlx");
module.exports = {
  name: 'tictactoe',
  aliases: ['ttt', 'tictac'],
  description: 'Play TicTacToe in Discord!',
  args: true,
  usage: '<user to play with>',
  execute(message, args) {
    var game = new tictactoe({
      message: message,
      player_two: message.mentions.members.first(),
    });
  }
}