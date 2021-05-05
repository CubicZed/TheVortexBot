module.exports = {
    name: "translateto",
    aliases: ['tt'],
    usage: '<language_id> <text>',
    args: true,
    description: "Translate a sentence/word for you, into a specific language. Auto detect what is the language. You need to input what is the language id, not the language name. See the list at `;help lang.`",
    execute(message, args) {
      const Discord = require('discord.js')
        const translate = require("@iamtraction/google-translate")
        let langDestination = args[0]
        delete args[0]
        let toTranslate = args.join(" ")
         translate(toTranslate, {to: `${langDestination}`}).then(answer => {
        const embed = new Discord.MessageEmbed().setColor('#171717').setTitle('**Translate**').setFooter('Made By Zmacky').addField('Tips:', 'see `mb lang` for supported language id.').setThumbnail('https://i.imgur.com/8oWNXU9.png')
  
         if (answer.from.autoCorrected) {
        embed.addField(`Translation (Auto Corrected):`, `${answer.text}`)
        message.channel.send(embed)
      } else if (!answer.from.autoCorrected) {
        embed.addField(`Translation`, `${answer.text}`)
        message.channel.send(embed)
      }
    }).catch((error) => {
        let embed = new Discord.MessageEmbed().setColor("#F44336").setFooter('Created By Zmacky & The Team');
    embed.setTitle("MarsBot - **Error**");
    embed.setThumbnail('https://i.imgur.com/LQUTm2Y.png')
    embed.addField(
      "Error Message:",
      `The Language Id Is Not Supported. \`${client.prefix} lang\` or \`${client.prefix} help tt\``
    );
    message.channel.send(embed)
    })
    }
}
