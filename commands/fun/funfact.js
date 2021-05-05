module.exports = {
	name: 'funfact',
	aliases: ['ff'],
	description: 'returns a fun fact',
	execute(message, args) {
		var funfacts = [
			'The heads on Easter Island have bodies.',
			'The moon has moonquakes.',
			'Goosebumps are meant to ward off predators.',
			'There’s no such thing as “pear cider.”',
			'Pineapple works as a natural meat tenderizer.',
			'The wood frog can hold its pee for up to eight months.',
			'The hottest spot on the planet is in Libya.',
			'You lose up to 30 percent of your taste buds during flight.',
			'Pigeons can tell the difference between a painting by Monet and Picasso.',
      
		];
		var funfact = funfacts[Math.floor(Math.random() * funfacts.length)];
		message.channel.send(funfact)
	}
};
