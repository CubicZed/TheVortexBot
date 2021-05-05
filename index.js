const fs = require('fs');
const Discord = require('discord.js');
const Canvas = require('canvas');
const chalk = require('chalk')
const keepAlive = require('./server');
const { prefix } = require('./config.json');
const token = process.env['token']
const client = new Discord.Client();

const eventFiles = fs
	.readdirSync('./events')
	.filter(file => file.endsWith('.js'));
console.log(`Loading: ${chalk.blue('Events')}`)
for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	console.log(`Loaded Event: ${chalk.green(file)}`)
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args, client));
	} else {
		client.on(event.name, (...args) => event.execute(...args, client));
	}
}

client.commands = new Discord.Collection();
client.categories = new Discord.Collection()

const commandFolders = fs.readdirSync('./commands');

const commandFiles = fs
	.readdirSync('./commands')
	.filter(file => file.endsWith('.js'));

for (const folder of commandFolders) {
	const commandFiles = fs
		.readdirSync(`./commands/${folder}`)
		.filter(file => file.endsWith('.js'));
	console.log(`Folder Loaded: ${chalk.blue(folder)}`)
	for (const file of commandFiles) {
		const command = require(`./commands/${folder}/${file}`);
    
    command.category = folder

    const category = client.categories.get(command.category)
    if (category) {
      category.set(command.name, command)
    } else {
      client.categories.set(command.category, new Discord.Collection().set(command.name, command))
    }
    
		client.commands.set(command.name, command);
		console.log(`Loaded: ${chalk.green(file)}`)
	}
}

const { GiveawaysManager } = require('discord-giveaways');
const manager = new GiveawaysManager(client, {
    updateCountdownEvery: 10000,
    hasGuildMembersIntent: false,
    reaction: '🎉'
})
client.giveawaysManager = manager;

client.tickets = new Discord.Collection()

//===========================================JOIN MESSAGE================================================

client.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content
		.slice(prefix.length)
		.trim()
		.split(/ +/);
	const commandName = args.shift().toLowerCase();

	const command =
		client.commands.get(commandName) ||
		client.commands.find(
			cmd => cmd.aliases && cmd.aliases.includes(commandName)
		);

	if (!command) return;

	if (command.guildOnly && message.channel.type === 'dm') {
		return message.reply("I can't execute that command inside DMs!");
	}

	if (command.permissions) {
		const authorPerms = message.channel.permissionsFor(message.author);
		if (!authorPerms || !authorPerms.has(command.permissions)) {
			return message.reply(
				`You can not do this! Required permission: \`${command.permissions}\``
			);
		}
	}

	if (command.args && !args.length) {
		let reply = `You didn't provide any arguments, ${message.author}!`;

		if (command.usage) {
			reply += `\nThe proper usage would be: \`${prefix}${command.name} ${
				command.usage
			}\``;
		}

		return message.channel.send(reply);
	}

	try {
		command.execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});

//Keep Alive
keepAlive();
//Login to Discord
client.login(token);
