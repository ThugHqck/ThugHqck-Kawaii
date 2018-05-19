exports.run = (client,message,args)=>{
  message.channel.send({embed: {
    color: 0xE57380,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "Meu Nome e Kawaii Sakura",
    description: "Meu criador e <@304046486243508225>",
    fields: [{
        name: "Estou em Desenvolvimento!", 
        value: "Em Breve eu serei bastante útil :heart: "
      },
    ],
    timestamp: new Date(),
    footer: {
      icon_url: message.author.avatarURL,
      text: "© Comando feito por " + message.author.username
}
}
})}
