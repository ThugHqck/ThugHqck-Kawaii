exports.run = (client, message, args) => {

    let paginas = ["- **ks_serverinfo**\n- **ks_botinfo**\n- **ks_gif**\n- **ks_apagar**\n- **ks_info**", "- **ks_help**\n- **ks_cat**\n- **ks_dog**\n- **ks_memoria**\n- **ks_sobre**\n- **ks_bot**", "- **ks_reverse**\n- **ks_ping**\n- **ks_ola**\n- **ks_avatar**\n- **ks_ak**", "- **ks_traduzir**\n- **ks_uptime**\n- **ks_fumar**\n- **ks_brisado**\n- **ks_adulto**\n- **ks_cv**\n- **ks_wtf**\n- **ks_criador**"];
    let pagina = 1;
  
    message.reply("**Comandos enviados em sua DM! :envelope_with_arrow:**");
    message.author.sendMessage({
        "embed": {
            "description":"**Aqui está uma lista de meus comandos:**\nㅤ\n**Prefix:** `ks_`",
            "color": 0xE57380,
            "timestamp": new Date(),
            "footer": {
                "icon_url": message.author.displayAvatarURL,
                "text": message.author.username
            },
            "thumbnail": {
                "url": "https://cdn.discordapp.com/avatars/441804313451298817/30d1f081419a56cd17c1a967aa35969d.png?size=2048"
            },
            "fields": [{
                "name": `:bookmark: Pag. ${pagina}/${paginas.length}:`,
                "value": paginas[pagina - 1]
            }]
        }
    }).then(help => {
  
        setTimeout(() => {
            help.react('⬅');
        }, 500);
        setTimeout(() => {
            help.react('➡');
        }, 1000);
  
        const collector = help.createReactionCollector((r, u) => (r.emoji.name === '⬅' || r.emoji.name === '➡') && u.id !== client.user.id);
  
        collector.on('collect', r => {
            switch(r.emoji.name) {
  
            case '⬅':
  
                if(pagina == 1) {
                  pagina = paginas.length
                  help.edit({
                      "embed": {
                          "description":"**Aqui está uma lista de meus comandos:**\nㅤ\n**Prefix:** `ks_`",
                          "color": 0xE57380,
                          "timestamp": new Date(),
                          "footer": {
                              "icon_url": message.author.displayAvatarURL,
                              "text": message.author.username
                          },
                          "thumbnail": {
                              "url": "https://cdn.discordapp.com/avatars/441804313451298817/30d1f081419a56cd17c1a967aa35969d.png?size=2048"
                          },
                          "fields": [{
                              "name": `:bookmark: Pag. ${pagina}/${paginas.length}:`,
                              "value": paginas[pagina - 1]
                          }]
                      }
                  });
                  r.users.filter(u => r.remove(u.id !== client.user.id));
                } else {
                    pagina = pagina - 1
                    help.edit({
                        "embed": {
                            "description":"**Aqui está uma lista de meus comandos:**\nㅤ\n**Prefix:** `ks_`",
                            "color": 0xE57380,
                            "timestamp": new Date(),
                            "footer": {
                                "icon_url": message.author.displayAvatarURL,
                                "text": message.author.username
                            },
                            "thumbnail": {
                                "url": "https://cdn.discordapp.com/avatars/441804313451298817/30d1f081419a56cd17c1a967aa35969d.png?size=2048"
                            },
                            "fields": [{
                                "name": `:bookmark: Pag. ${pagina}/${paginas.length}:`,
                                "value": paginas[pagina - 1]
                            }]
                        }
                    });
                    r.users.filter(u => r.remove(u.id !== client.user.id));
                }
  
                break;
  
            case '➡':
  
                if(pagina + 1 > paginas.length) {
                  pagina = 1
                  help.edit({
                      "embed": {
                          "description":"**Aqui está uma lista de meus comandos:**\nㅤ\n**Prefix:** `ks_`",
                          "color": 0xE57380,
                          "timestamp": new Date(),
                          "footer": {
                              "icon_url": message.author.displayAvatarURL,
                              "text": message.author.username
                          },
                          "thumbnail": {
                              "url": "https://cdn.discordapp.com/avatars/441804313451298817/30d1f081419a56cd17c1a967aa35969d.png?size=2048"
                          },
                          "fields": [{
                              "name": `:bookmark: Pag. ${pagina}/${paginas.length}:`,
                              "value": paginas[pagina - 1]
                          }]
                      }
                  });
                  r.users.filter(u => r.remove(u.id !== client.user.id));
                } else {
                    pagina = pagina + 1
                    help.edit({
                        "embed": {
                            "description":"**Aqui está uma lista de meus comandos:**\nㅤ\n**Prefix:** `ks_`",
                            "color": 0xE57380,
                            "timestamp": new Date(),
                            "footer": {
                                "icon_url": message.author.displayAvatarURL,
                                "text": message.author.username
                            },
                            "thumbnail": {
                                "url": "https://cdn.discordapp.com/avatars/441804313451298817/30d1f081419a56cd17c1a967aa35969d.png?size=2048"
                            },
                            "fields": [{
                                "name": `:bookmark: Pag. ${pagina}/${paginas.length}:`,
                                "value": paginas[pagina - 1]
                            }]
                        }
                    });
                    r.users.filter(u => r.remove(u.id !== client.user.id));
                }
  
                break;
  
            }
        })
  
        setTimeout(() => {
            help.delete();
        }, 1 * 60 * 1000);
  
    })
  
  }