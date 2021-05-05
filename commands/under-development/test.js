const ms = require('ms')
module.exports = {
  name: 'timetest',
  execute(message, args) {
    const time = args.join(' ')
    const msTime = ms(time)
    function timeTest() {
      message.reply(`**${msTime}** milisecond delay`)
    }
    setTimeout(timeTest, msTime)
  }
}
