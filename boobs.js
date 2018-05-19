var discord = require ('discord.js')
exports.run = (client,message,args)=> {
    if(message.channel.nsfw == false) return message.reply("esse comando só funciona em canais nsfw")
var falas = ['https://cdn.nekos.life/boobs/boobs256.gif','https://cdn.nekos.life/boobs/boobs_193.gif','https://cdn.nekos.life/boobs/boobs012.gif','https://cdn.nekos.life/boobs/boobs_240.gif','https://cdn.nekos.life/boobs/boobs_259.gif','https://cdn.nekos.life/boobs/boobs266.gif','https://cdn.nekos.life/boobs/boobs_349.gif','https://cdn.nekos.life/boobs/boobs_369.gif','https://cdn.nekos.life/boobs/boobs_084.gif','https://cdn.nekos.life/boobs/boobs_118.gif','https://cdn.nekos.life/boobs/boobs034.gif','https://cdn.nekos.life/boobs/boobs094.gif','https://cdn.nekos.life/boobs/boobs_046.gif','https://cdn.nekos.life/boobs/boobs_367.gif','https://cdn.nekos.life/boobs/boobs_420.gif','https://cdn.nekos.life/boobs/boobs116.gif','https://cdn.nekos.life/boobs/boobs235.gif','https://cdn.nekos.life/boobs/boobs120.gif','https://cdn.nekos.life/boobs/boobs_081.gif','https://cdn.nekos.life/boobs/boobs258.gif','https://cdn.nekos.life/boobs/boobs119.gif','https://cdn.nekos.life/boobs/boobs_423.gif','https://cdn.nekos.life/boobs/boobs070.gif'];
    var embed = new discord.RichEmbed()
    .setTitle("Boobs Hentai")
    .setColor("0xE57380")
    .setImage(falas[Math.round(Math.random()*falas.length-1)])
    .setTimestamp()
    .setFooter("Adulto",client.user.avatarURL)
 
 
     message.channel.send(embed)

}