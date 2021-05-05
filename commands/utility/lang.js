module.exports = {
    name: 'lang',
    aliases: ['language'],
    usage: "[page]",
    args: false,
    description: "Give you supported language list for mb translate and mb translateto.",
    execute(message, args, Discord, client) {
        require("./dbLang.js")
            if (!args[0]) {
              message.channel.send(langEmbed)
              return
            } else if (args[0]) {
              if (typeof args[0] === 'number') return message.channel.send('Invalid.')
              const page = Number(args[0])
              if (page > 7 && page < 1) {
                message.channel.send(`Invalid Page Argument.`)
              } else if (page === 1) {
                message.channel.send(langEmbed)
              } else if (page === 2) {
                message.channel.send(langEmbed2)
              } else if (page === 3) {
                message.channel.send(langEmbed3)
              } else if (page === 4) {
                message.channel.send(langEmbed4)
              } else if (page === 5) {
                message.channel.send(langEmbed5)
              } else if (page === 6) {
                message.channel.send(langEmbed6)
              } else if (page === 7) {
                message.channel.send(langEmbed7)
              }
            }
    }
}