const Discord = require('discord.js')
module.exports = {
  name: 'partner',
  description: 'Use this command to send a partnership request to us!\nRemember to split your arguments using `|`',
  args: true,
  usage: '<Server Name>|<Members (Without Bots)>|<Server Description>|<Server Invite Link>)',
  execute(message, args) {
    if (message.channel.type !== 'dm') {
      return message.reply('this command can only be used in DMs!');
    }
    
    const newArgs = args.join(' ').split('|');
    
    if (newArgs.length !== 4) {
      return message.reply('you did not provide enough arguments!')
    }
    
    const [guildName, guildMembers, guildDesc, guildInvite] = newArgs;
    
    if (!guildName.length || !guildMembers.length || !guildDesc.length || !guildInvite.length) {
      return message.reply('you cannot leave a field empty!')
    }
    
    const theVortex = message.client.guilds.cache.find(guild => guild.id === '722788871716470845')
    
    let channel = theVortex.channels.cache.find((x) => (x.id === "829247441152507944" ))
    
    const partnerEmbed = new Discord.MessageEmbed()
    .setTitle(guildName)
    .setAuthor(message.author.tag, message.author.avatarURL())
    .addField('Members:', guildMembers)
    .addField('Description:', guildDesc)
    .addField('Invite:', guildInvite)
    
    const replyEmbed = new Discord.MessageEmbed()
    .setTitle('I have sent your request!')
    .setDescription('If we accept your request, we will either join your server to discuss with you or a staff member will DM you.\nIf we do not accept your request, we will not DM you back.')
    .setFooter('Thank you for sending a request!')
    
    channel.send(`<@&782567497676226560> New Partnership Request by ${message.author.tag}`, partnerEmbed)
    message.reply(replyEmbed)
  }
}