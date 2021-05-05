const { prefix } = require('../../config.json')
const fs = require('fs');
module.exports = {
	name: 'help',
  aliases: ['commands', 'categories'],
	description: 'lmao did you actually send `;help help` for this?',
	usage: '[category name] or [command name]',
	execute(message, args) {
		const Discord = require('discord.js');
		const data = [];

        if (!args.length) {
            const title = 'Here\'s a list of my command categories:';
            const footer = `You can send ${prefix}help <category> to list commands on a specific category! Example: ;help utility`;
                const helpEmbed = new Discord.MessageEmbed()
                .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                .setTitle(title)
                .addFields(
                  { name: '🤖 Bot', value: 'Internal bot commands\n`;help bot`', inline: true },
                  { name: '🐸 Dank-Memer', value: 'Dank Memer Utility Commands\n`;help dank-memer`', inline: true },
                  { name: '🎡 Fun', value: 'Use some fun and funny commands!\n`;help fun`', inline: true },
                  { name: '🎮 Games', value: 'Play some games with these commands\n`;help games`', inline: true },
                  { name: '🎉 Giveaways', value: 'Host some giveaways with these commands\n`;help giveaways`', inline: true},
                  { name: '❗ Important', value: 'Important commands are listed here\n`;help important`', inline: true },
                  { name: '💡 Miscellaneous', value: 'Some uncategorized commands\n`;help miscellaneous`', inline: true },
                  { name: '🛡 Moderation', value: 'Moderate the chat using moderation commands\n`;help moderation`', inline: true },
                  { name: '✉️ Modmail', value: 'Contact us easily!\n`;help modmail`', inline: true },
                  { name: '🏓 Pings', value: 'Ping specific roles for events\n`;help pings`', inline: true },
                  { name: 'Rest-Api\n`;help rest-api`', value: 'N/A', inline: true },
                  { name: '🛠 Utility\n`;help utility`', value: 'Quickly execute multiple things', inline: true }
                )
                .setTimestamp()
                .setThumbnail('https://cdn.discordapp.com/attachments/800575718437290004/822053259845304350/vortexani.gif')
                .setFooter(footer);
            return message.channel.send(helpEmbed)
        }
        const folder = args[0].toLowerCase();

        const category = message.client.categories.get(folder)
        if (!category) {
          const name = args[0].toLowerCase();
          const command = message.client.commands.get(name) || message.client.commands.find(c => c.aliases && c.aliases.includes(name));

          if (!command) return message.reply(`there is no command or category called "${name}"`)

          const commandEmbed = new Discord.MessageEmbed()
          .setTitle(`Command: ${command.name}`)
          
          if (command.description) commandEmbed.addField('Description:', command.description);
          
          if (command.usage) commandEmbed.addField('Usage:', `\`${prefix}${command.name} ${command.usage}\``);
          
          if (command.aliases) commandEmbed.addField('Aliases:', command.aliases.join(', '));
          
          return message.channel.send(commandEmbed);
        }

        const commands = category.array()

        for (const command of commands) {
          data.push(command.name)
        }

        const commandsEmbed = new Discord.MessageEmbed()
        .setTitle(`Category: ${args[0]}`)
        .setDescription(data.join(', '))
        .setFooter('You can send ;help <command> to list info on a specific command!')
        .setTimestamp()
        
        message.channel.send(commandsEmbed);
    },
};
