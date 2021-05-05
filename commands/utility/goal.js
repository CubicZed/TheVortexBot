module.exports = {
  name: 'goal',
  description: 'Displays the goal of the server',
  execute(message, args) {
    const Discord = require('discord.js');
    
    var goal = (1000 - `${message.guild.memberCount}`)
    
    if (`${message.guild.memberCount}` >= 1000) {
      var reachedGoal = "We have reached our goal!"
      var goal = "none"
    } else { var reachedGoal = "We have not yet reached our goal."}
    
    const goalEmbed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`${message.guild.memberCount}/1000`)
    .setURL()
    .setAuthor('The Vortex Goal', '', '')
    .setDescription(reachedGoal)
    .setThumbnail('https://cdn.discordapp.com/attachments/800575718437290004/810761334446620692/vortexani.gif')
    .addFields(
      { name: 'Members left until we reach our goal:', value: goal },
	  )
	  .setTimestamp()
	  .setFooter('Help us grow this server!');
	  
	  message.channel.send(goalEmbed);
	  console.log(`Goal requested my ${message.author.tag}\nThe Vortex Currently has ${message.guild.memberCount} members.`)
  },
};