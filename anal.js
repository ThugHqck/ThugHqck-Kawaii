var discord = require ('discord.js')
exports.run = (client,message,args)=> {
    if(message.channel.nsfw == false) return message.reply("esse comando só funciona em canais nsfw")
var falas = ['https://cdn.nekos.life/anal/Anal_056.gif','https://cdn.nekos.life/anal/Anal_039.gif','https://cdn.nekos.life/anal/Anal_023.gif','https://cdn.nekos.life/anal/Anal_078.gif','https://cdn.nekos.life/anal/anal01.gif','https://cdn.nekos.life/anal/Anal_020.gif','https://cdn.nekos.life/anal/Anal_075.gif','https://cdn.nekos.life/anal/Anal_100.gif','https://cdn.nekos.life/anal/anal07.gif','https://cdn.nekos.life/anal/Anal_013.gif','https://cdn.nekos.life/anal/anal40.gif','https://cdn.nekos.life/anal/Anal_104.gif','https://cdn.nekos.life/anal/anal36.gif','https://cdn.nekos.life/anal/Anal_087.gif','https://cdn.nekos.life/anal/Anal_016.gif','https://cdn.nekos.life/anal/Anal_066.gif'];
    var embed = new discord.RichEmbed()
    .setTitle("Anal Hentai")
    .setColor("0xE57380")
    .setImage(falas[Math.round(Math.random()*falas.length-1)])
    .setTimestamp()
    .setFooter("Adulto",client.user.avatarURL)
 
     message.channel.send(embed)

}