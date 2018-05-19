var discord = require ('discord.js')
exports.run = (client,message,args)=> {

    var embed = new discord.RichEmbed()
    .setTitle("Maconha")
    .setDescription("Baseado Do Thug :heart: ")
    .setColor("0xE57380")
    .setImage('https://cdn.discordapp.com/attachments/441263628591824907/442384048044900352/31fd2f5275fb4e8aa858c6aea2501b50.gif')
    .setFooter('Feito Por Thug#6929 (Criador)')
 
     message.channel.send(embed)

}