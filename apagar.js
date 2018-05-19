exports.run = function(a, b, c) {
    if (!b.member.hasPermissions(["MANAGE_MESSAGES"])) { b.reply("Você não tem permissão para limpar o chat!"); return }
    let argss = c.slice(0).join(' ');
    if (c.length < 1) return b.reply('Deve dizer uma quantidade de mensagens para eu apagar').then((value) => {
        setTimeout(() => {
            value.delete();
        }, 10000);
    });
    setTimeout(function() {
        b.channel.sendMessage("**:mega: Removido " + b.content.replace("A:clear ", "") + " mensagens**").then((value) => {
            setTimeout(() => {
                value.delete();
            }, 7000);
        });
    }, 2000)
   a = parseInt(c.join(" "));
    b.channel.fetchMessages({ limit: a }).then(function(a) {
        return b.channel.bulkDelete(a)
    })
};