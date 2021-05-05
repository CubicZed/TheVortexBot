module.exports = {
  name: 'guildMemberAdd',
  execute(member) {
    if (member.guild.id !== '722788871716470845') return

    const Discord = require('discord.js')
    
    const welcomeEmbed = new Discord.MessageEmbed()
    .setTitle(`Welcome to The Vortex ${member.user.tag}!`)
    .setDescription(`You are our ${member.guild.memberCount}th member! Please read the server rules attatched below.`)
    .setFooter('We hope that you have a great time!')
    .setThumbnail(member.user.avatarURL)
    .setImage('https://www.churchmotiongraphics.com/wp-content/uploads/2019/08/Big-Lines-Welcome-1.jpg')
    .setAuthor('The Vortex', 'https://cdn.discordapp.com/attachments/800575718437290004/810761334446620692/vortexani.gif')
    .setColor('BLUE')
    
    const ruleEmbed = new Discord.MessageEmbed()
    .setAuthor('The Vortex Rules', 'https://cdn.discordapp.com/attachments/800575718437290004/810761334446620692/vortexani.gif')
    .setDescription('**1.** No spam allowed unless in spam channels.\n\n**2.** No inappropriate language or offensive words. This applies to any form of media as well. This also applies to using offensive words by adding reactions in the form of letters.\n\n**3.** Do not bring more than 1 account to the server.\n\n**4.** No nsfw or inappropriate content. This also applies to media. Doing so will be taken as a violation of rule number 2.\n\n**5.** Any bug or glitch should immediately be reported\n\n**6.** Please do not scam in trades concerning bots. This server is a safe place and no one should ruin that.\n\n**7.** Begging is strictly prohibited, and will result in a warn. This includes begging for DMC, roles, partnerships, etc.\n\n**8.** Dark humor is allowed but please don’t make it too dark.\n\n**9.** Copying channels, roles, and other parts of the server is strictly prohibited. Doing so will result in a ban when done twice.\n\n**10.** Do not disrespect any of our staff. This means that you should not get mad at them for warning you if you know you did something wrong. If a moderator tells you to stop, please stop immediately. You are probably doing something that is not listed in the rules but is obviously wrong.\n\n**11.** The Discord TOS and the rules of bots also apply in this server.\n\n**12.** Anything else obviously wrong will not be tolerated. Do not try to find loopholes.')
    .setImage('https://www.seekpng.com/png/detail/17-178645_show-rules-icon-plus-button-ui.png')
    .setColor('YELLOW')
    
    member.user.send(welcomeEmbed)
    member.user.send(ruleEmbed)
  }
}