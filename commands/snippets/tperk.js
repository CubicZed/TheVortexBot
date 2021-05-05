const Discord = require('discord.js')
module.exports = {
  name: 'tperk',
  description: 'Get tier perks',
  guildOnly: true,
  execute(message, args) {
    const embed = new Discord.MessageEmbed()
    .setDescription('**__Tiers__**\nThere are daily donations that give extra perks and contribute to donation perks.\n\n**__Classic__**\n- Hoisted Role\n- Ar when pinged\n- Perms in Gambler Channels\n**Donates: 1 Million Daily**\n\n**__Boosted__**\n- All perks from previous tiers\n- Hoisted Role\n- Bypass all giveaway and heist requirements\n- Custom Role\n**Donates: 5 Million Daily**\n\n**__Hyper__**\n- All perks from previous tiers\n- Private Channel (Can Invite 1 Person)\n- Private VC (Can Invite 1 Person)\n- Can bypass slowmode in heist channels (can be taken away if abused)\n**Donates: 10 Million Daily**')

    message.channel.send(embed)
  }
}