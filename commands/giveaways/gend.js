const ms = require('ms')
module.exports = {
    name: 'gend',
    description: 'Ends a giveaway',
    guildOnly: true,
    args: true,
    usage: '<message id>',
    execute(message, args) {
        const client = message.client
        
        if (!message.member.roles.cache.some(role => role.name == 'Staff')) return message.reply('you do not have permission to do this!')
        
        if(!args[0]) return message.channel.send('Please specify a message id')

        const giveaway = client.giveawaysManager.giveaways.find((g) => g.messageID === args.join(' '))
        if(!giveaway) return message.channel.send('Giveaway not found')

        client.giveawaysManager.edit(giveaway.messageID, {
            setEndTimestamp: Date.now()
        })
        message.reply('your giveaway should end in a few seconds.')
    }
}