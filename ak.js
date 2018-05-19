var discord = require ('discord.js')
exports.run = (client,message,args)=> {

    var embed = new discord.RichEmbed()
    .setTitle("AK-47")
    .setDescription("Arma Do Sapinho :heart: ")
    .setColor("0xE57380")
    .setImage('https://cdn.discordapp.com/attachments/439862832087957534/441953634163490817/image.gif')
    .setFooter('Feito Por Thug#6929 (Criador)')
 
     message.channel.send(embed)

}