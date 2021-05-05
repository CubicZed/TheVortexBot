module.exports = {
  name: 'payout',
  description: 'Payouts',
  execute(message, args) {
    if (message.member.roles.cache.some(role => role.name == 'Staff')) {
    const Discord = require('discord.js');
    
    const payoutEmbed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle("Congratulations to the winner(s)!")
    .setURL()
    .setAuthor("The Vortex", "https://cdn.discordapp.com/attachments/800575718437290004/810761334446620692/vortexani.gif", '')
    .setDescription("Your giveaway will try to be payed out as soon as possible in <#778449767688568832>. If you have not received your prize yet after 24 hours, please DM/contact the host of the giveaway. Thank you for waiting.")
    .setThumbnail('')
    .addFields()
	  .setImage()
	  .setTimestamp()
	  .setFooter('', '');
	  
	  message.delete()
	  message.channel.send(payoutEmbed);
	  console.log(`Payout by ${message.author.username}`)
  } else {
    message.reply('you do not have permission to do that.\n**Required role:** Staff')
  }},
};