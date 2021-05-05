module.exports = {
  name: "ascii",
  description: "Converts text into ascii",
  args: true,
  usage: '<message to say>',
  execute(message, args) {
    const Figlet = require('figlet');

    if(!args.length) {
      return message.channel.send("Please Provide Something to Say")
    }

    Figlet(`${args.join(' ')}`, function(err, data) {
      if(err) {
        console.log('Something went wrong');
        console.dir(err);
      }
      if(data.length > 1000) return message.channel.send('The max length is 100')
      message.channel.send('```'+ data + '```')
  });
}
};


