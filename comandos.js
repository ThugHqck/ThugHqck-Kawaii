var Discord = require('discord.js');
const request = require('request');

exports.run = (client,message,args)=>{

var embedstatus = new Discord.RichEmbed()
.setColor(0xE57380)
.setDescription(`Olá ${message.author}, Abaixo está a lista de todos os meus comandos!`)
.addField('Comandos úteis','`ks_botinfo`\n`ks_avatar`\n`ks_ping`\n`ks_kawaii`\n`ks_serverinfo`\n`ks_bot`\n`ks_avatar`\n`ks_uptime`\n`ks_convite`\n`ks_memoria (Veja a Memoria Usada No Bot)`\n`ks_info (Use esse comando para ver algumas informaçoes sobre mim!)`\n`ks_help`\n`ks_createinvite`' ,true)
.addField('Comando De Diversão', '`ks_ak`\n`ks_reverse (Escreva Uma Mensagem Para o Bot da reverse nela)`\n`ks_cat (gif de gatos aleatorios)`\n`ks_dog (gif de cachorros)`\nks_gif (Procure gif aleatorios)`\n`ks_traduzir (Use esse comando para traduzir algo)`\n`ks_fumar`\n`ks_brisado`\n`ks_cv`\n`ks_wtf`\n`ks_criador`', true)
.addField('Moderaçao', '**Use ks_moderaçao**', true)
.addField('Musica', '**Use ks_musica**', true)
.addField('Adulto', '**use ks_adulto**', true)
.setThumbnail('https://cdn.discordapp.com/avatars/441804313451298817/30d1f081419a56cd17c1a967aa35969d.png?size=2048')
.setTimestamp()
.setFooter("Kawaii Sakura Comandos",client.user.avatarURL)

message.channel.send(embedstatus)

}