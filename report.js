var Discord = require("discord.js");
const botconfig = require("../botconfig.json");

module.exports.run = async (client, message, args) => {

    if(args[0] == "help"){
      message.reply("Use o comando: !report <user> <reason>");
      return;
    }
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Este usuario não existe.");
    let rreason = args.join(" ").slice(22);

    let botembed = new Discord.RichEmbed()
    .setDescription("Kawaii-Reports")
    .setColor(0xE57380)
    .addField("Usuario Reportado", `${rUser} ID: ${rUser.id}`)
    .addField("Reportado por", `${message.author} ID: ${message.author.id}`)
    .addField("Canal", message.channel)
    .addField("Horario", message.createdAt)
    .addField("Razão", rreason);
    message.delete().catch(O_o=>{});
    return message.channel.send(botembed);

}

module.exports.help = {
  name: "report"
}