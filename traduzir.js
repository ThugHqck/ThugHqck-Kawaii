exports.run = (client, message, args)  => {
    const translate = require('google-translate-api');
    let reason = args.slice(1).join(' ');
      if (reason.length < 1) return message.reply('**Diga o idioma e oque devo traduzir!**');
    translate(`${message.content.replace(`ks_traduzir ${args[0]} `,"")}`, {to: `${args[0]}`}).then(res => {
        message.channel.sendMessage({
            "embed": {
              "description": "ㅤ",
              "color": 0xE57380,
              "thumbnail": {
                "url": "https://cdn.discordapp.com/avatars/441804313451298817/0b3664a22b2db6c13296d333e81d8bd9.png?size=2048"
              },
              "author": {
                "name": message.author.username,
                "icon_url": message.author.displayAvatarURL
              },
              "fields": [
                {
                  "name": ":confused: NORMAL",
                  "value": "```\n" + message.content.replace(`ks_traduzir ${args[0]} `,"") + "```",
                  "inline": true
                },
                {
                  "name": ":sunglasses: TRADUZIDO",
                  "value": "```\n" + res.text + "```",
                  "inline": true
                }
              ]
            }
          });
    }).catch(err => {
        console.error(err);
        message.reply("**O idioma parece não existir. 😕**")
    });
    }