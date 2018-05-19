var Discord = require('discord.js');
exports.run = (client,message,args)=>{
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Bot Informaçoes")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("Nome Do Bot", bot.user.username)
    .addField("Criado Em", bot.user.createdAt);
    return message.channel.send(botembed);
  }