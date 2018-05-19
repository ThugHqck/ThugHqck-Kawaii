var Discord = require('discord.js');
const request = require('request');

exports.run = (client,message,args)=>{

var embedstatus = new Discord.RichEmbed()
.setColor(0xE57380)
.setDescription(`Olá ${message.author}, Abaixo está a lista das minhas regras!`)
.setTitle("Regras")
.addField("Sejam bem-vindos ao servidor, fazer novas amizades, jogar juntos e muito mais, mas para que isso siga em frente devemos todos seguir as seguintes regras:",  "⬇️Regras Abaixo⬇️" , true)
.addField("1. Respeitar uns aos outros", "Respeite")
.addField("2. Saber limites para determinados assuntos", "Respeite")
.addField("3. Ser registrado (a) para fazer parte das categorias do servidor", "Respeite")
.addField("4. Proibido compartilhamento de outros servidores a não ser que tenha permissão de patrocínio", "Respeite")
.addField("5. Se divertir", "Respeite")
.addField("6. Nunca quebrar as regras para não ser banido", "Respeite")
.addField("7. Respeitar a Hierarquia", "Respeite")
.setThumbnail('https://cdn.discordapp.com/avatars/441804313451298817/30d1f081419a56cd17c1a967aa35969d.png?size=2048')
.setTimestamp()
.setFooter("Kawaii Sakura Regras",client.user.avatarURL)

message.channel.send(embedstatus)

}