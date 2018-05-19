var Discord = require('discord.js');
const request = require('request');
const os = require('os-utils');

exports.run=function(c,a){a.channel.send("Claro!").then(function(b){b.edit("Pong :ping_pong:  `"+(b.createdTimestamp-a.createdTimestamp)+"ms`")})};

exports.run = (client,message,args)=>{

 String.prototype.toHHMMSS = function () {
        var sec_num = parseInt(this, 10); 
        var hours   = Math.floor(sec_num / 3600);
        var days   = Math.floor(hours / 24);
        var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
        var seconds = sec_num - (hours * 3600) - (minutes * 60);
        if (hours   < 10) {hours   = "0"+hours;}
        if (minutes < 10) {minutes = "0"+minutes;}
        if (seconds < 10) {seconds = "0"+seconds;}
        var time    = hours+'h '+minutes+'m '+seconds+'s';
            days > 1 ? time = days+" dias " : time = time
        return time;
    };

var embedstatus = new Discord.RichEmbed()
.setColor(0xE57380)
.setDescription(`Olá ${message.author}, Sou a Kawaii um bot programado em javascript! \n Utilize ks_comandos para ver a lista dos meus comandos!!`)
.addField('Nome','Kawaii Sakura' ,true)
.addField('Desenvolvedor','<@304046486243508225>' ,true)
.addField('Nascimento', '3 Maio de 2018',true)
.addField('Servidores Conectados', `${client.guilds.size}`, true)
.addField('Pessoas Conectadas', `${client.users.size}`, true)
.addField('Quantidade de Canais', ` ${client.channels.size}`, true)
.addField('Uptime:', os.processUptime().toString().toHHMMSS(), true)
.addField('Ping', ` ${client.uptime.size}`, true)
.setThumbnail('https://cdn.discordapp.com/avatars/441804313451298817/30d1f081419a56cd17c1a967aa35969d.png?size=2048')
.setTimestamp()
.setFooter("Kawaii Sakura",client.user.avatarURL)

message.channel.send(embedstatus)
}