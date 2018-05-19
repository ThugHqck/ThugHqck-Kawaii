var Discord = require('discord.js');
const request = require('request');

exports.run = (client,message,args)=>{


var embed = new Discord.RichEmbed()
.setColor(0xE57380)
.setTitle("Comandos De Musica")
.setDescription(`Olá ${message.author}, Abaixo está a lista de comandos de musica!`)
.setThumbnail('https://images-ext-2.discordapp.net/external/XknbfC9YzTWyh9hawYTWQn3NQeOMo1j1ELWNqziRLBw/https/media.discordapp.net/attachments/356270085566103563/399578527726305310/emoji.png?width=54&height=54')
.addField('`Use o comando ks!help all`\n`Para ver todos os comando de musica`', true)
.setTimestamp()
.setFooter("Kawaii Sakura Musica",client.user.avatarURL)

message.channel.send(embed)

}