/*
The numbers associated with both “low ping” and “high ping” are within a range. Ping amounts of 100 ms and below are average for most broadband connections. In gaming, any amounts below a ping of 20 ms are considered exceptional and “low ping,” amounts between 50 ms and 100 ms range from very good to average, while a ping of 150 ms or more is less desirable and deemed “high ping.”
*/
module.exports = {
	name: 'ping',
	description: 'Gives the bot response time',
	execute(message, args) {
	  message.channel.send('Pinging...').then(sent => {
    const ping = sent.createdTimestamp - message.createdTimestamp
    if (ping <= 20) {
      let performance = 'Exceptional'
    } else if (ping > 20 && ping <= 100) {
      let performance = 'Average'
    } else if (ping >= 200) {
      let performance = 'Slow'
    }
    sent.edit(`Roundtrip latency: \`${sent.createdTimestamp - message.createdTimestamp}ms\``)
	  });
	},
};