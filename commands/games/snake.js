const SnakeGame = require('snakecord');
const snakeGame = new SnakeGame({
    title: 'Snake Game',
    color: "GREEN",
    timestamp: false,
    gameOverTitle: "Game Over"
});
module.exports = {
  name: 'snake',
  aliases: ['snek', 'snakegame'],
  description: 'Play the Snake Game right in Discord!',
  execute(message, args) {
    return snakeGame.newGame(message);
  }
}