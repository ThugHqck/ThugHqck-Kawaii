var Discord = require('discord.js');
exports.run = (client,message,args)=>{
var usuario = message.mentions.users.first();
if(message.mentions.users.size <= 0){
  usuario = message.author;
}
var embedavatar = new Discord.RichEmbed()
.setColor(0xE57380)
.setAuthor(message.author.username,message.author.avatarURL)
.setDescription(`[Clique aqui](${usuario.avatarURL}) para acessar o link do avatar!`)
.setImage(usuario.avatarURL)
.setTimestamp()
.setFooter("Avatar",client.user.avatarURL)
message.channel.send(embedavatar)
}