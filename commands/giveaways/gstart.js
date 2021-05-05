const ms = require('ms')
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'gstart',
    aliases: ['giveaway'],
    description: 'Start Giveaways!',
    guildOnly: true,
    args: true,
    usage: '<duration> <winners> <prize>',
    execute(message, args) {
        if (!message.member.roles.cache.some(role => role.name == 'Staff')) return message.reply('you do not have permission to do this!')
    
        const client = message.client
        const channel = message.channel

        const duration = args[0]
        if(!duration) return message.channel.send('please enter a valid duration')

        const winners = args[1]
        if(!winners) return message.channel.send('Please specify an amount of winners')

        const prize = args.slice(2).join(" ")
        if(!prize) return message.channel.send('Please specify a prize to win')
        
        const hosted = message.author
        
        message.delete()

        client.giveawaysManager.start(channel, {
            time: ms(duration),
            prize: prize,
            winnerCount: winners,
            hostedBy: hosted,
            messages: {
              giveaway: '**╭── The Vortex Giveaways──╮**',
              giveawayEnded: '**╭── The Vortex Giveaways──╮**',
              timeRemaining: 'Time Left: {duration}',
              embedFooter: 'Ends at',
            }
        })
    }
}