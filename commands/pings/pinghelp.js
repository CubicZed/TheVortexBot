module.exports = {
  name: 'pinghelp',
  description: 'Shows the help for pings',
  execute(message, args) {
    const Discord = require('discord.js')
    if (message.member.roles.cache.some(role => role.name == 'Staff')) {
      const pinghelpEmbed = new Discord.MessageEmbed()
      .setTitle('Ping Commands for Staff')
      .setColor('#36393e')
      .setDescription('`;gaw <donator> <message>` - Pings Giveaway Ping along with the donator and its message.\n\n`;gping` - Pings Giveaway Ping. \n\n`;heist <amount> <time left>` - Pings Heist Ping along with the amount of the heist and the time left.\n\n`;hping` - Pings Heist Ping.\n\n`;endheist <donator of heist>` - Use this when a heist is done and successful; a thank you message\n\n`;eping` - Pings Event Ping.\n\n`;qotdping` - Pings the Question of the Day Ping\n\n`;pping` - Pings Partnership Ping(funny pp)\n\n`;ohping` - Pings Outside Heist Ping.\n\n`;crping` - pings chat revive \n\n`;pinghelp` - Displays the message you are seeing right now.')
      .setFooter('You can do ;help <command name> to learn more of each command.')
      
      message.channel.send(pinghelpEmbed)
    } else {
      message.reply('You do not have permission to do this.\n**Required role:** Staff')
    }
  }
}