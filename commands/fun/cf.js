module.exports = {
	name: 'coinflip',
	aliases: ['cf'],
	description: 'Returns heads or tails',
	execute(message, args) {
		var answers = ['It was **HEADS**', 'It was **TAILS**'];
		var answer = answers[Math.floor(Math.random() * 2)];
		message.channel.send(answer);
	}
};
