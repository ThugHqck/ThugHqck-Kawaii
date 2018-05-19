var discord = require ('discord.js')
exports.run = (client,message,args)=> {

    var embed = new discord.RichEmbed()
    .setTitle("Convite (Clique aqui Para Entrar No Grupo)")
    .setDescription(`Olá ${message.author} Convide seus amigos parar entra no meu grupo do discord`)
    .setColor("0xE57380")
    .addField('Kawaii Sakura [Group] Entrem No Meu Grupo Do Discord :heart:', 'Grupo Criado Por <@304046486243508225>', true)
    .setThumbnail('https://cdn.discordapp.com/avatars/441804313451298817/30d1f081419a56cd17c1a967aa35969d.png?size=2048')
    .setURL('https://discord.gg/nVQrfUH')
    .setFooter('Feito Por Thug#6929')
 
     message.channel.send(embed)

}