var Discord = require('discord.js');
const request = require('request');

exports.run = (client,message,args)=>{

    var embed = new Discord.RichEmbed()
    .setColor("0xE57380")
    .setTitle("Meu Criador")
    .addField("Twitter Do Criador", "• @ThugHck")
    .addField("Discord Do Criador", "• Thug#6929")
    .addField("Contato Pessoal", "• thughqck12@gmail.com")
    .addField("Bot Programado Em", "• JavaScripts")
    .addField('Meu Grupo :heart: ', '**[Grupo] - (https://discord.gg/nVQrfUH)**')
    .setTimestamp()
    .setFooter(client.user.username, client.user.avatarURL)
    message.channel.send(embed);
}