module.exports = {
	name: 'message',
	execute(message) {

		var lowerCaseMessage = message.content.toLowerCase()
		
		if (lowerCaseMessage === '!d bump' && message.channel.id === '751802818511241280') {
		  message.react('👊')
		}
		
		if (lowerCaseMessage.includes('rickroll')) {
		  message.channel.send('https://media.discordapp.net/attachments/765537655550640130/765867128225267712/video0.mp4')
		}
    
    if (message.content === '<@!729795837223501834>') {
        message.react('<:spongeangry:786400570536624179>')
	}
    
    if (message.content.includes('<@!652510507839782923>')) {
		  message.react('<:feelsbanman:805785512350187561>')
		}
		
		if (message.content === ';join-test') {
		  message.client.emit('guildMemberAdd', message.member);
		}
  }}