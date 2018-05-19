const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Você não tem permissão para usar esse comando");
  let botmessage = args.join(" ");
  message.delete().catch();
  message.channel.send(botmessage);
}

module.exports.help = {
  name: "falar"
}