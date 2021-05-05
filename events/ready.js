const Discord = require('discord.js')
const chalk = require('chalk')
const { prefix } = require('../config.json');
module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
    const guild = client.guilds.cache.find(g => g.id === '722788871716470845')
		const activities = [
    `${guild.memberCount} Members!`,
`Join The Vortex`,
  ]

  let i = 0
  setInterval(() => client.user.setActivity(`${prefix}help | ${activities[i++ % activities.length]}`, {type: 'LISTENING'}), 15000);
    console.log(`Ready! Logged in as ${chalk.cyan(client.user.tag)}`);
		console.log(`Status: ${chalk.green(client.user.presence.status)}`)
	},
};
