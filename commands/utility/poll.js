module.exports = {
  name: 'poll',
  description: 'Starts a poll',
  args: true,
  usage: '<question>',
  execute(message, args) {
    if (message.member.roles.cache.some(role => role.name == 'Admin','Head Admin')) {
    const Discord = require('discord.js');
    const question = args.join(" ");
    
    const pollEmbed = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setThumbnail()
    .setColor("RANDOM")
    .setTitle(`📊 **NEW POLL** 📊`)
    .setDescription(question)
    .setTimestamp()
    
    message.channel.send(pollEmbed).then(pollEmbed => {
      pollEmbed.react('<:v_pepe_yes:811165759362957323>')
      pollEmbed.react('<:v_pepe_no:811165813851291659>')
    })
    } else { message.reply('you do not have permission to do that.\n**Required role:** Admin') }
  } 
}