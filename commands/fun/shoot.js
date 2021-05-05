module.exports = {
  name: 'shoot',
  description: 'Sends a gun emoji to the mentioned user',
  args: true,
  usage: '<user>',
  execute(message, args) {
    if (!message.mentions.users.size) {
      return message.reply('you need to tag a user in order to shoot them!')
    }
    const taggedUser = message.mentions.users.first()
    taggedUser.send('<:kermit_ak47:816177514644242453>')
    taggedUser.send(`You were shot by **${message.author.tag}** in **The Vortex**`)
    message.reply(`Successfully shot ${taggedUser.tag}`)
  }
}