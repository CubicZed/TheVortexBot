module.exports = {
  name: 'donohelp',
  description: 'Gets the help for donations',
  guildOnly: true,
  execute(message, args) {
    const Discord = require('discord.js')
    const donoEmbed = new Discord.MessageEmbed()
    .setAuthor('The Vortex', 'https://cdn.discordapp.com/attachments/800575718437290004/810761334446620692/vortexani.gif')
    .setTitle('Donation Help')
    .setColor('#04fba4')
    .addFields(
      { name: '**For Heists**', value: '`;hdonate <time>/<amount>/<requirements>/<message>`\n<:a_apoint:819714918591889409> Please rememeber to include the `/`\n<:a_apoint:819714918591889409> Please wait patiently for a heist manager\n<:a_apoint:819714918591889409> only works in <#795840782518059038>' },
      { name: '**For Giveaways**', value: '`;gdonate <time>/<prize>/<winners>/requirements>/<message>`\n<:a_apoint:819714918591889409> Please remember to put the `/` \n<:a_apoint:819714918591889409> Please wait patiently for a giveaway manager\n<:a_apoint:819714918591889409> <#775615213672202250>' },
	  )
	  .setFooter('Thank you for donating!')
	  .setTimestamp()
	  
	  message.channel.send(donoEmbed)
  }
}