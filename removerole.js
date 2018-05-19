exports.run = (client, message, args) => {
    if (!message.member.hasPermission('ADMINISTRATOR'))
        return message.channel.send(":x: Comando permitido apenas para cargo de Administrador no servidor!");
    let suffix = args.slice(0).join(' ');

    let membro = message.mentions.members.first();
    let nomerole = '@'+suffix.split(' ').slice(1).join(' ');

    if (!message.member.hasPermission('ADMINISTRATOR'))
    return message.channel.send(":x: Você não tem permissão para utilizar este comando!");
    let role = message.mentions.roles.first();
     
    if(message.mentions.users.size < 1) return message.reply('Mencione um usuário').catch(console.error);
    if (!nomerole) return message.channel.send('Escreva desta forma, `removerole `@username @role`');
    if(!role) return message.channel.send('Role não encontrada.');
    
    membro.removeRole(role).catch(console.error);
    message.channel.send(`A role **${role}** foi removida do **${membro.user}**.`);
 
  };