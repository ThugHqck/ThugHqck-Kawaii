var discord = require ('discord.js')
exports.run = (client,message,args)=> {
    if(message.channel.nsfw == false) return message.reply("esse comando só funciona em canais nsfw")
var falas = ['https://images.sex.com/images/pinporn/2018/04/27/620/19416898.png?site=sex&user=decapitateddeadsoull','https://images.sex.com/images/pinporn/2018/04/15/620/19369403.jpg?site=sex&user=boobspussyassman','https://images.sex.com/images/pinporn/2018/04/18/620/19381558.jpg?site=sex&user=hardillon','https://images.sex.com/images/pinporn/2018/04/16/620/19373259.jpg?site=sex&user=camux79','https://images.sex.com/images/pinporn/2018/04/24/620/19403595.jpg?site=sex&user=xtr69','https://images.sex.com/images/pinporn/2018/04/20/620/19390706.jpg?site=sex&user=raptorjesus','https://images.sex.com/images/pinporn/2016/11/04/300/16844468.png','https://images.sex.com/images/pinporn/2018/04/30/620/19425475.jpg?site=sex&user=hentailover486','https://images.sex.com/images/pinporn/2018/04/24/620/19405716.jpg?site=sex&user=fulano34','https://images.sex.com/images/pinporn/2018/05/01/620/19431808.jpg?site=sex&user=ufonaut','https://images.sex.com/images/pinporn/2017/06/18/300/17927813.jpg','https://images.sex.com/images/pinporn/2017/12/30/300/18867798.jpg','https://images.sex.com/images/pinporn/2018/02/11/300/19085877.jpg','https://images.sex.com/images/pinporn/2018/03/20/300/19269875.jpg','https://images.sex.com/images/pinporn/2017/07/16/300/18062477.jpg','https://images.sex.com/images/pinporn/2018/04/23/620/19399117.jpg?site=sex&user=whitetailshaker','https://images.sex.com/images/pinporn/2018/04/26/620/19412859.jpg?site=sex&user=2blacked','https://images.sex.com/images/pinporn/2018/04/25/620/19406585.jpg?site=sex&user=burgesster','https://images.sex.com/images/pinporn/2018/05/01/620/19429351.jpg?site=sex&user=roflyoga','https://imgur.com/SkiIqY5','https://files.yande.re/sample/acee2338451108c3b305040771fe2826/yande.re%20388942%20sample%20areola%20cameltoe%20chericot_rozel%20cleavage%20dakimakura%20dress%20garter%20matsumiya_kiseri%20no_bra%20open_shirt%20pantsu%20panty_pull%20skirt_lift%20string_panties.jpg','https://images.sex.com/images/pinporn/2018/04/07/620/19338115.jpg?site=sex&user=ichigolala99','https://images.sex.com/images/pinporn/2018/04/08/300/19345272.jpg','https://images.sex.com/images/pinporn/2018/04/24/620/19402513.png?site=sex&user=layzer','https://images.sex.com/images/pinporn/2018/04/22/620/19397506.jpg?site=sex&user=darkangles','https://images.sex.com/images/pinporn/2018/04/17/620/19378405.jpg?site=sex&user=nyu','https://images.sex.com/images/pinporn/2018/04/24/620/19402671.jpg?site=sex&user=dinhr','https://images.sex.com/images/pinporn/2018/04/27/620/19418112.png?site=sex&user=bradbbq','https://images.sex.com/images/pinporn/2018/04/25/620/19406795.jpg?site=sex&user=auric','https://images.sex.com/images/pinporn/2018/04/22/620/19395249.jpg?site=sex&user=cerber','https://images.sex.com/images/pinporn/2018/04/21/620/19392764.jpg?site=sex&user=ak47j','https://images.sex.com/images/pinporn/2018/04/30/620/19428825.png?site=sex&user=eds321','https://images.sex.com/images/pinporn/2018/04/15/620/19369249.jpg?site=sex&user=carlos27','https://images.sex.com/images/pinporn/2018/04/22/620/19396778.jpg?site=sex&user=bdsmcanada','https://images.sex.com/images/pinporn/2018/04/21/620/19391969.jpg?site=sex&user=thesmaster','https://images.sex.com/images/pinporn/2018/04/09/620/19347712.jpg?site=sex&user=outercircle','https://images.sex.com/images/pinporn/2018/04/16/620/19376562.jpg?site=sex&user=plasticbucket','https://images.sex.com/images/pinporn/2018/04/06/620/19337321.jpg?site=sex&user=evnya','https://images.sex.com/images/pinporn/2018/04/14/620/19367068.png?site=sex&user=divixy','https://images.sex.com/images/pinporn/2018/04/09/620/19349145.jpg?site=sex&user=amade','https://images.sex.com/images/pinporn/2018/04/30/620/19427991.jpg?site=sex&user=twashere2','https://images.sex.com/images/pinporn/2018/04/11/620/19353994.jpg?site=sex&user=xcandymanx','https://images.sex.com/images/pinporn/2016/10/05/300/16672388.jpg','https://images.sex.com/images/pinporn/2016/09/14/300/16545796.jpg','https://images.sex.com/images/pinporn/2016/08/14/300/16361993.jpg','https://images.sex.com/images/pinporn/2017/04/18/300/17643710.png','https://images.sex.com/images/pinporn/2018/04/14/300/19368547.jpg','https://images.sex.com/images/pinporn/2016/12/28/300/17126110.jpg','https://images.sex.com/images/pinporn/2018/04/13/620/19363677.png?site=sex&user=bigusdickus','https://images.sex.com/images/pinporn/2017/05/02/300/17711993.jpg','https://images.sex.com/images/pinporn/2014/09/10/300/7898327.jpg','https://images.sex.com/images/pinporn/2014/09/10/300/7898317.jpg','https://cdn.nekos.life/hentai/sex54.jpg','https://cdn.nekos.life/hentai/sex12.jpg','https://cdn.nekos.life/hentai/sex51.jpg','https://cdn.nekos.life/hentai/sex55.jpg','https://cdn.nekos.life/hentai/sex61.jpg','https://cdn.nekos.life/hentai/sex19.jpg','https://cdn.nekos.life/hentai/sex26.jpg','https://cdn.nekos.life/hentai/sex25.jpg','https://cdn.nekos.life/hentai/sex30.jpg','https://cdn.nekos.life/hentai/sex17.jpg','https://cdn.nekos.life/hentai/sex28.png'];

    var embed = new discord.RichEmbed()
    .setTitle("Imagens De Hentai")
    .setColor("0xE57380")
    .setImage(falas[Math.round(Math.random()*falas.length-1)])
    .setTimestamp()
    .setFooter("Adulto",client.user.avatarURL)
 
     message.channel.send(embed)

}