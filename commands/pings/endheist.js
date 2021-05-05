module.exports = {
  name: 'endheist',
  description: 'sends the heist end message',
  args: true,
  usage: '<person to thank for heist>',
  execute(message, args) {
    const Discord = require('discord.js')
    if (message.member.roles.cache.some(role => role.name == 'Staff')) {
      const endheistEmbed = new Discord.MessageEmbed()
      .setTitle('This heist has ended')
      .setColor('#7063ff')
      .setImage('https://gblobscdn.gitbook.com/assets%2F-LdPzLtyP46oY7cyXnkw%2F-LkcsW-UawMnfqC9MA_f%2F-Lkcs_BjR2djE7UDYPhn%2Fsgdsdga.png?')
      .setDescription('Those are some great payouts! \n\nStay in this server for more heists like these, and also our HUGE 1000 member special that will be happening in the future!\n\nIf you were fined, or you died, join our next heists for another try.\n\nAlso, thank the <@&814441692593520680>s for grinding daily!\n\nThanks for joining this heist, and we hope to see you soon!')
      
      message.channel.send(`Thank ${args} for this great heist in <#751788818776064040>!`, endheistEmbed)
      message.delete()
      
    } else {
      message.reply('You do not have permission to do that.\n**Required role:** Staff')
    }
  }
}