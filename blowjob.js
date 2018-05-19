var discord = require ('discord.js')
exports.run = (client,message,args)=> {
    if(message.channel.nsfw == false) return message.reply("esse comando só funciona em canais nsfw")
var falas = ['https://cdn.nekos.life/blowjob/blowjob80.jpg','https://cdn.nekos.life/blowjob/blowjob38.jpg','https://cdn.nekos.life/blowjob/blowjob40.jpg','https://cdn.nekos.life/blowjob/blowjob42.jpg'];
    var embed = new discord.RichEmbed()
    .setTitle("Blowjob Hentai")
    .setColor("0xE57380")
    .setImage(falas[Math.round(Math.random()*falas.length-1)])
    .setTimestamp()
    .setFooter("Adulto",client.user.avatarURL)
 
 
     message.channel.send(embed)

}