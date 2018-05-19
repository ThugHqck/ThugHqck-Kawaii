var Discord = require('discord.js');
exports.run = (client,message,args)=>{
    let sicon = message.guild.iconURL;
let serverembed = new Discord.RichEmbed()
.setDescription("Server Informaçoes")
.setColor("0xE57380")
.setThumbnail(sicon)
.addField("Nome Do Grupo", message.guild.name)
.addField("Criado Em", message.guild.createdAt)
.addField("Entrou Em", message.member.joinedAt)
.addField("Total De Membros", message.guild.memberCount);

return message.channel.send(serverembed);
}