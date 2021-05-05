const Discord = require('discord.js')
const chalk = require('chalk')
const { prefix } = require('../config.json');
module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		const activities = [
    `${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)} Members!`,
`Join The Vortex`,
  ]

  let i = 0
  setInterval(() => client.user.setActivity(`${prefix}help | ${activities[i++ % activities.length]}`, {type: 'LISTENING'}), 15000);
    console.log(`Ready! Logged in as ${chalk.cyan(client.user.tag)}`);
		console.log(`Status: ${chalk.green(client.user.presence.status)}`)
	},
};