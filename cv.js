var discord = require ('discord.js')
exports.run = (client,message,args)=> {

    var embed = new discord.RichEmbed()
    .setTitle("Gato Voador")
    .setColor("0xE57380")
    .setImage('https://orig00.deviantart.net/55af/f/2017/035/d/f/nyan_cat_by_finnjr63-daxtpz4.gif')
    .setTimestamp()
    .setFooter("Gatinho Voador",client.user.avatarURL)
 
     message.channel.send(embed)

}