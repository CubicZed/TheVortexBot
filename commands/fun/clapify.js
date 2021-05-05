module.exports = { 
  name: "clapify",
  aliases: ['clap'],
  description: "Clapify's your message",
  args: true,
  usage: '<message to say>',
  execute(message, args) {

    if(!args.length) {
      return message.channel.send("Please Provide Something to Say")
    }

    const clap = args.join(" :clap: ");
    if (clap.length > 100) return message.channel.send("The Limit is 100 Characters");
    message.channel.send(`:clap: ${clap} :clap:`);
  }
}


