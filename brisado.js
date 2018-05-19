var discord = require ('discord.js')
exports.run = (client,message,args)=> {

    var embed = new discord.RichEmbed()
    .setTitle("Brisa Do Thug")
    .setDescription("TOOOOOOOO BRISADÂOOOOOOOOOO :heart: ")
    .setColor("0xE57380")
    .setImage('https://cdn.discordapp.com/attachments/441263628591824907/442383278662483991/tenor.gif')
    .setFooter('Feito Por Thug#6929 (Criador)')
 
     message.channel.send(embed)

}