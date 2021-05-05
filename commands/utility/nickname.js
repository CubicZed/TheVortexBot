module.exports = {
  name: 'nickname',
  aliases: ['nick'],
  description: 'Sets your nickname',
  args: true,
  usage: '<nickname>',
  execute(message, args) {
    let nickToSet = args.join(' ')
    message.member.setNickname(nickToSet)
  }
}