const os = require('os-utils');

exports.run = (client, message, args) => {

    String.prototype.toHHMMSS = function () {
      var sec_num = parseInt(this, 10); 
      var hours   = Math.floor(sec_num / 3600);
      var days   = Math.floor(hours / 24);
      var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
      var seconds = sec_num - (hours * 3600) - (minutes * 60);
      if (hours   < 10) {hours   = "0"+hours;}
      if (minutes < 10) {minutes = "0"+minutes;}
      if (seconds < 10) {seconds = "0"+seconds;}
      var time    = "- **" + hours+'** horas\n- **'+minutes+'** minutos\n- **'+seconds+'** segundos';
          days > 1 ? time = days+" dias " : time = time
      return time;
  };

    message.channel.sendMessage({
        "embed": {
          "description":"Olá, sou a **Kawaii Sakura**, um bot simples para discord, aqui estão algumas informações sobre mim:\nㅤ",
          "color": 0xE57380,
          "timestamp": new Date(),
          "footer": {
            "icon_url": message.author.displayAvatarURL,
            "text": message.author.username
          },
          "thumbnail": {
            "url": "https://cdn.discordapp.com/avatars/441804313451298817/30d1f081419a56cd17c1a967aa35969d.png?size=2048"
          },
          "fields": [
            {
              "name": ":bust_in_silhouette: Donos:",
              "value": `- **<@304046486243508225>**`,
              "inline": true
            },
            {
              "name": ":tools: Parceria:",
              "value": `- **<@323634899426869250>**`,
              "inline": true
            },
            {
              "name": ":trident: Status:",
              "value": `- **${Number(client.guilds.size).toLocaleString()}** guilds\n- **${Number(client.channels.size).toLocaleString()}** channels\n- **${Number(client.users.size).toLocaleString()}** users\n- **${Number(client.emojis.size).toLocaleString()}** emojis`,
              "inline": true
            },
            {
              "name": ":tools:  Links:",
              "value": "- **[Bot](https://discordapp.com/oauth2/authorize?client_id=441804313451298817&scope=bot&permissions=8)**\n - **[Grupo](https://discord.gg/UCME84C)**",
              "inline": true
            },
            {
              "name": ":clock1: Uptime:",
              "value": `${os.processUptime().toString().toHHMMSS()}`,
              "inline": true
            },
            {
              "name": ":books: Info:",
              "value": `- **11.3.0** discord.js\n- **8.9.4** node.js\n- **${(Date.now() - message.createdTimestamp)}** ms`,
              "inline": true
            }
          ]
        }
      });

}