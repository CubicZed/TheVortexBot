module.exports = {
  name: 'role',
  aliases: ['add-role'],
  description: 'adds a role to the specified member',
  guildOnly: true,
  permissions: 'MANAGE_MEMBERS',
  args: true,
  usage: '<member> <role name>',
  execute(message, args) {
    const member = message.mentions.members.first()
    const user = message.mentions.users.first()
    const userTag = user.tag
    args.shift()
    const roleName = args.join(' ')
    const role = message.guild.roles.cache.find(role => role.name === roleName);
    if (!role) {
      return message.reply(`there is no role with the name - ${roleName}`)
    }
    member.roles.add(role)
    message.channel.send(`Successfuly added **${roleName}** to **${userTag}**`)
  }
}