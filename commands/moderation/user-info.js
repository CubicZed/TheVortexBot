module.exports = {
  name: 'user-info',
  aliases: ['ui'],
  description: 'Gives information of the user',
  execute(message, args) {
    const Discord = require('discord.js')
    if (!args.length) {
      const uiEmbed = new Discord.MessageEmbed()
      .setAuthor(message.author.username, message.author.avatarURL())
      .setTitle(message.author.tag)
      .setColor('RANDOM')
      .setThumbnail(message.author.avatarURL())
      .addFields(
        { name: 'ID', value: message.author.id, inline: false}, 
        { name: 'Created At', value: message.author.createdAt, inline: false },
        { name : 'Joined At', value: message.member.joinedAt, inline: false },
      )
      .setTimestamp()
    
    message.channel.send(uiEmbed)
    
      
    } else {
      const taggedUser = message.mentions.users.first();
      const taggedMember = message.mentions.members.first()
      const uiEmbed = new Discord.MessageEmbed()
        .setAuthor(taggedUser.username, taggedUser.avatarURL())
        .setTitle(taggedUser.tag)
        .setColor('RANDOM')
        .setThumbnail(taggedUser.avatarURL())
        .addFields(
          { name: 'ID', value: taggedUser.id, inline: false}, 
          { name: 'Created At', value: taggedUser.createdAt, inline: false },
          { name : 'Joined At', value: taggedMember.joinedAt, inline: false },
        )
        .setTimestamp()
        .setFooter(`Requested by: ${message.author.tag}`, message.author.avatarURL())
    
      message.channel.send(uiEmbed)
    }
  }
}