module.exports = {
	name: 'shaun',
	description: 'Lord Shaun',
	execute(message, args) {
		var kings = [
      "https://images-ext-2.discordapp.net/external/1IY_L72bsgsLRdSMTYRMJJNhkN_7RRkPrj_DFNa6n3k/https/pics.me.me/thumb_bow-down-to-your-king-memegenerator-net-bow-down-to-your-52940298.png",
      "https://i.imgflip.com/523wf7.jpg",
      "https://media.discordapp.net/attachments/819216524342460456/821830952846098462/Z.png",
		];
		var king = kings[Math.floor(Math.random() * 3)];
		message.channel.send(king);
	}
};
