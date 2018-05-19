var discord = require ('discord.js')
exports.run = (client,message,args)=> {
    if(message.channel.nsfw == false) return message.reply("esse comando só funciona em canais nsfw")
var falas = ['https://cdn.nekos.life/pussy_jpg/pussy091.jpg','https://cdn.nekos.life/pussy_jpg/pussy005.jpg','https://cdn.nekos.life/pussy_jpg/pussy034.jpg','https://cdn.nekos.life/pussy_jpg/pussy124.jpg','https://cdn.nekos.life/pussy_jpg/pussy061.jpg','https://cdn.nekos.life/pussy_jpg/pussy064.jpg','https://cdn.nekos.life/pussy_jpg/pussy059.jpg','https://cdn.nekos.life/pussy_jpg/pussy100.jpg','https://cdn.nekos.life/pussy_jpg/pussy001.jpg','https://cdn.nekos.life/pussy_jpg/pussy056.jpg','https://cdn.nekos.life/pussy_jpg/pussy015.jpg','https://cdn.nekos.life/pussy_jpg/pussy021.jpg','https://cdn.nekos.life/pussy_jpg/pussy030.jpg','https://cdn.nekos.life/pussy_jpg/pussy069.jpg','https://cdn.nekos.life/pussy_jpg/pussy033.jpg','https://cdn.nekos.life/pussy_jpg/pussy068.png','https://cdn.nekos.life/pussy_jpg/pussy044.jpg','https://cdn.nekos.life/pussy_jpg/pussy082.jpg','https://cdn.nekos.life/pussy_jpg/pussy019.jpg','https://cdn.nekos.life/pussy_jpg/pussy113.jpg','https://cdn.nekos.life/pussy_jpg/pussy042.png','https://cdn.nekos.life/pussy_jpg/pussy001.jpg','https://cdn.nekos.life/pussy_jpg/pussy094.png'];
    var embed = new discord.RichEmbed()
    .setTitle("Pussy Hentai")
    .setColor("0xE57380")
    .setImage(falas[Math.round(Math.random()*falas.length-1)])
    .setTimestamp()
    .setFooter("Adulto",client.user.avatarURL)

 
     message.channel.send(embed)

}