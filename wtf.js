var discord = require ('discord.js')
exports.run = (client,message,args)=> {
var falas = ['https://thumbs.gfycat.com/BigAbsoluteDogfish-max-1mb.gif','https://thumbs.gfycat.com/HiddenFailingCleanerwrasse-max-1mb.gif','http://pa1.narvii.com/6551/cafccb6e16d18678661e64ea31c3313ec0ee3b46_00.gifnod'];

    var embed = new discord.RichEmbed()
    .setTitle("WHAT TA FUCK")
    .setColor("0xE57380")
    .setImage(falas[Math.round(Math.random()*falas.length-1)])
    .setTimestamp()
    .setFooter("WTF",client.user.avatarURL)
 
 
     message.channel.send(embed)

}     
