var Discord = require('discord.js');
const request = require('request');

exports.run = (client,message,args)=>{

message.delete().catch(); 
    var ajuda = new Discord.RichEmbed()
    .setColor("0xE57380")
    .setThumbnail("https://cdn.discordapp.com/avatars/441804313451298817/30d1f081419a56cd17c1a967aa35969d.png?size=2048")
    .setTitle(":cop: Comandos Administrativos :cop:")
    .addField(':cop: ks_kick', "• Utilize ks_kick <@user> <motivo>, executando esse comando o bot irá expulsar o usuário marcado e enviará um embed no canal de punições. **Por exemplo: **ks_kick @Thug#6929 Ser Lindo")
    .addField(':cop: ks_anúncio (Em Breve)', "• Utilize ks_anúncio <mensagem do anúncio>, executando esse comando o bot enviará a sua mensagem em um embed no canal aonde o comando foi executado. **OBS:**Somente administradores do grupo.")
    .addField(':cop: ks_tempmute', "• Utilize ks_tempmute <@user> <tempo> <motivo>, executando esse comando o bot irá mutar o usuário marcado por um determinado tempo e enviará um embed no canal de punições.**Por exemplo: **ks_tempmute @Thug#6929 10m Palavras Inadequadas")
    .addField(':cop: ks_ban', "• Utilize ks_ban <@user> <motivo>, executando esse comando o bot irá banir o usuário marcado e enviará um embed no canal de punições. **Por exemplo: **ks_ban @Thug#6929 Ser Lindo")
    .setFooter(client.user.username, client.user.avatarURL)
    message.author.send(ajuda);
    
    message.reply('Veja seu privado :envelope_with_arrow:!');
}
module.exports.help = {
    name: "ajuda"
}