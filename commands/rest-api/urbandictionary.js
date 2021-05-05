const Discord = require('discord.js');
const fetch = require('node-fetch');
const querystring = require('querystring');
module.exports = {
	name: 'urbandictionary',
	aliases: ['ud', 'define'],
	description: 'Gets a definition from the Urban Dictionary',
	args: true,
	usage: '<what to define>',
	async execute(message, args) {
		const query = querystring.stringify({ term: args.join(' ') });
		const { list } = await fetch(
			`https://api.urbandictionary.com/v0/define?${query}`
		).then(response => response.json());

		if (!list.length) {
			return message.channel.send(
				`No results found for **${args.join(' ')}**.`
			);
		}

		const trim = (str, max) => ((str.length > max) ? `${str.slice(0, max - 3)}...` : str);

		const [answer] = list;

		const urbanDictionaryEmbed = new Discord.MessageEmbed()
			.setColor('#EFFF00')
			.setTitle(answer.word)
			.setURL(answer.permalink)
			.addFields(
				{ name: 'Definition', value: trim(answer.definition, 1024) },
				{ name: 'Example', value: trim(answer.example, 1024) },
				{ name: 'Rating', value: `${answer.thumbs_up} thumbs up. ${answer.thumbs_down} thumbs down.` }
			);

		message.channel.send(urbanDictionaryEmbed);
	}
};
