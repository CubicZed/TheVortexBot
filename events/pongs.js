const { prefix } = require('../../config.json')

module.exports = {
	name: 'message',
	execute(message) {
    if (message.content === '<@!729795837223501834>') {
        message.react('<:spongeangry:786400570536624179>')
    }
    
  }}