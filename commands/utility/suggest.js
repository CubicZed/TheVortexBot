module.exports = {
  name: "suggest",
  description: "Send your Suggestion",
  args: true,
  usage: '<suggestion>',
  execute(message, args) {
    const Discord = require('discord.js');
    
    if(!args.length) {
      return message.channel.send("Please Give the Suggestion")
    }
    
    let channel = message.guild.channels.cache.find((x) => (x.name === "suggestions" || x.name === "💡﹕suggestions"))
    
    
    if (!channel) {
      return message.channel.send("there is no channel with the name - suggestions")
    }
                                                    
    
    const suggestEmbed = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setThumbnail()
    .setColor("CYAN")
    .setDescription(args.join(" "))
    .setTimestamp()
    
    
    channel.send(suggestEmbed).then(suggestEmbed => {
      suggestEmbed.react("✅")
      suggestEmbed.react("❌")
    })
    

    message.channel.send("Sent Your Suggestion to <#" + channel + ">")
    
  }
}