exports.run = (client,message,args)=>{
    var razão = args.slice(1).join(" ")

    var usuario = message.mentions.users.first();
    if(!message.guild.member(message.author.id).hasPermissions("KICK_MEMBERS")) return message.reply("você não tem permissão de usar esse comando")
    if(message.mentions.users.size < 1) return message.reply("você não mencinou ninguém")
    if(!message.guild.member(usuario).bannable) return message.reply("eu não posso kickar essa pessoa")
    if(razão.length < 1) return message.reply("você não colocou uma razão")

    message.guild.member(usuario).ban()

   var discord = require ('discord.js')

   var embed = new discord.RichEmbed()
   .setTitle("Kawaii-Kicks")
   .setDescription("Kicks Da kawaii")
   .setColor("0xE57380")
   .addField("Usuario Kickado:", usuario.username)
   .addField("razão:", razão);

    message.channel.send(embed)
}