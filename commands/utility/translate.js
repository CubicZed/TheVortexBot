module.exports = {
    name: "translate",
    aliases: ['tr'],
    usage: '<text>',
    args: true,
    description: "Translate a sentence/word for you. Auto detect what is the language, and then translating it to English. ",
    execute(message, args) {
      const Discord = require('discord.js')
        const translate = require("@iamtraction/google-translate")
            let toTranslate = args.join(" ")
        translate(toTranslate, {to: 'en'}).then(answer => {
          const embed = new Discord.MessageEmbed().setColor('#171717').setTitle('**Translate**').setFooter('Made By Zmacky.').addField('Tips:', 'see `;lang` for supported language id.').setThumbnail('https://i.imgur.com/8oWNXU9.png')
          
              if (answer.from.autoCorrected) {
                embed.addField(`Translation (Auto Corrected):`, `${answer.text}`)
                message.channel.send(embed)
              } else if (!answer.from.autoCorrected) {
                embed.addField(`Translation`, `${answer.text}`)
                message.channel.send(embed)
              }
            })
    }
}