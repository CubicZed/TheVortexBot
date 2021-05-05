module.exports = {
	name: 'dadjoke',
	description: 'Gives a random dadjoke',
	execute(message, args) {
		var dadjokes = [
			"What rock group has four men that don't sing? Mount Rushmore.",
			'When I was a kid, my mother told me I could be anyone I wanted to be. Turns out, identity theft is a crime.',
			'A guy goes to his doctor because he can see into the future. The doctor asks him, "How long have you suffered from that condition?" The guy tells him, "Since next Monday."',
			'What do sprinters eat before a race? Nothing, they fast!',
			'What concert costs just 45 cents? 50 Cent featuring Nickelback!',
			"What do you call a mac 'n' cheese that gets all up in your face? Too close for comfort food!",
			"Why couldn't the bicycle stand up by itself? It was two tired!",
			'Did you hear about the restaurant on the moon? Great food, no atmosphere!',
			'Why do melons have weddings? Because they cantaloupe!',
			'What happens when you go to the bathroom in France? European.',
			"What's the difference between a poorly dressed man on a tricycle and a well-dressed man on a bicycle? Attire!",
			'How many apples grow on a tree? All of them!',
			"Did you hear the rumor about butter? Well, I'm not going to spread it!",
			'Did you hear about the guy who invented Lifesavers?  They say he made a mint!',
			'Last night I had a dream that I weighed less than a thousandth of a gram. I was like, 0mg.',
			'A cheese factory exploded in France. Da brie is everywhere!',
			"Why did the old man fall in the well? Because he couldn't see that well!",
			'What do you call a factory that sells passable products? A satisfactory!',
			"Why did the invisible man turn down the job offer? He couldn't see himself doing it!",
			"Want to hear a joke about construction? I'm still working on it!",
			'I was really angry at my friend Mark for stealing my dictionary. I told him, "Mark, my words!"',
			'How does Moses make his coffee? Hebrews it.',
			"I'm starting a new dating service in Prague. It's called Czech-Mate.",
			'I was just reminiscing about the beautiful herb garden I had when I was growing up. Good thymes.',
			'Do you know the last thing my grandfather said to me before he kicked the bucket? "Grandson, watch how far I can kick this bucket."'
		];
		var dadjoke = dadjokes[Math.floor(Math.random() * 25)];
		message.channel.send(dadjoke);
	}
};
