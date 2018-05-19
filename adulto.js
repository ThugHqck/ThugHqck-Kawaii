var Discord = require('discord.js');
const request = require('request');

exports.run = (client,message,args)=>{

    var embed = new Discord.RichEmbed()
    .setColor("0xE57380")
    .setTitle("Comandos Adultos")
    .addField('ks_hentai', "• Utilize esse comando para ver imagens de hentai.")
    .addField('ks_hentaigif', "• Utilize esse comando para ver gifs de hentai.")
    .addField('ks_blowjob', '• Utilize esse comando para ver imagens/gif de blowjob.')
    .addField('ks_pussy', '• Utilize esse comando para ver imagens de Pussy.')
    .addField('ks_anal', "• Utilize esse comando para ver gif de anal.")
    .addField('ks_boobs', "• Utilize esse comando para ver Gif De Peitos.")
    .setFooter(client.user.username, client.user.avatarURL)
    message.channel.send(embed);
}
