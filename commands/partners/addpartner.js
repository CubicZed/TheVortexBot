const Discord = require("discord.js");
const Database = require("@replit/database");
const partners = new Database();
module.exports = {
  name: "partners",
  aliases: ["p"],
  description: "Partner Commands",
  args: true,
  guildOnly: true,
  usage: "<option (send or add)><Server ID>|<Channel ID>/<Amount>|<Time Left>",
  async execute(message, args) {
    const option = args[0];

    if (option === "add") {
      args.shift();
      const newArgs = args.join(" ").split("|");
      const guild = message.client.guilds.cache.find(
        (g) => g.id === newArgs[0]
      );

      if (!guild)
        return message.reply("I am not a member of any guild with that ID");

      const guildName = guild.name;

      const channel = guild.channels.cache.find((c) => c.id === newArgs[1]);

      if (!channel)
        return message.reply("That guild does not have a channel with that ID");

      if (channel.type != "text")
        return message.reply("That channel is not a text channel");

      partners.set(guild, { name: guildName, channel: channel });

      message.channel.send(
        `Succesfully added ${guildName} as Partner! (At ${channel} )`
      );
    } else if (option === "send") {
      args.shift();
      const newArgs = args.join(" ").split("|");
      const [hAmount, timeLeft] = newArgs

      const partnerSend = new Discord.MessageEmbed()
      .setTitle('╭──── The Vortex ────╮')
      .addFields(
        {
          name: 'Amount',
          value: hAmount,
        }, {
          name: 'Time Left',
          value: timeLeft,
        },
        {
          name: 'Link',
          value: 'https://discord.gg/azKXSZG4gj'
        }
      )
      .setThumbnail(message.guild.iconURL())
      .setFooter('Join Now!', message.guild.iconURL())
      .setTimestamp()
      .setColor('#171717')
      .setImage('https://media.discordapp.net/attachments/752141164735365181/811575300152098836/standard_5.gif')
      .setURL('https://discord.gg/azKXSZG4gj')
    console.log(partners)
      for (const guild of partners) {
        let channel = guild.channel
        client.channels.get(channel).send(partnerSend)
        message.channel.send('Successfully sended your Broadcast to ' + guild.name)
      }
    } else {
      return message.reply("that is not an option!");
    }
  },
};
