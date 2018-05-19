exports.run = (client, message, args)  => {
    message.delete()
    if  (!message.member.hasPermission(["MANAGE_MESSAGES"])) return message.reply("Você não possui permissão para usar esse comando.");
    var user = message.mentions.users.first()
    var user2 = message.guild.member(message.mentions.users.first())
 var achar = message.guild.roles.find("name", "🔇 Kawaii - Mute 🔇")
 if (achar == null ){
    message.guild.createRole({
    "name": "🔇 Kawaii - Mute 🔇"
    }).then(role =>{
        message.guild.channels.forEach(channel => {
          channel.overwritePermissions(role, {
              SEND_MESSAGES: false,
              ADD_REACTIONS: false,
              SPEAK: false})})})
          
                        }   
            if (achar == null)return message.reply("Use novamente o comando!")
var cargoid = achar.id
let reason1 = args.slice(1).join(' ');
if(message.member.roles.find("name", "🔇 Kawaii - Mute 🔇")) return message.channel.send(real)
if (message.mentions.users.size < 1) return message.reply('Mencione a um usuário para silenciar')
if (reason1.length < 1) return message.reply('Defina um tempo!')
var tempo = args.slice(1).join(" ")
var achartudo = tempo.indexOf("h")
if (achartudo < 0) {
var achartudo2 = tempo.indexOf("d")
if (achartudo2 < 0) {
    var achartudo3 = tempo.indexOf("s")
    if (achartudo3 < 0) {
        var achartudo4 = tempo.indexOf("m")
        if (achartudo4 < 0) return message.reply("Você esquece de colocar a unidade do tempo")      
}
}}
var acharo = tempo.indexOf("h")
if (0  < acharo){
  var tempo2 =  tempo.replace(/h/g,"")
var temporeal = 1000*60*60*parseInt(tempo2)
};
var acharo2 = tempo.indexOf("m")
if (0  < acharo2){
  var tempo2 =  tempo.replace(/h/g,"")
var temporeal = 1000*60*parseInt(tempo2)
};
var acharo3 = tempo.indexOf("s")
if (0  < acharo3){
  var tempo2 =  tempo.replace(/h/g,"")
var temporeal = 1000*parseInt(tempo2)
};
var acharo4 = tempo.indexOf("d")
if (0  < acharo4){
  var tempo2 =  tempo.replace(/h/g,"")
var temporeal = 1000*60*60*24*parseInt(tempo2)
};
if (user2.highestRole.position >= message.member.highestRole.position) return message.reply("Não foi possível mutar este usuário :neutral_face: ")

         var achar2 = user2.roles.find("name", "🔇 Kawaii - Mute 🔇")
client.guilds.get(message.guild.id).members.get(user.id).addRole(cargoid)
var trocar = args.slice(1).join(" ")
var a1 = trocar.indexOf("h")
if ( 0 < a1)
{
  var real = trocar.replace(/h/g," Horas" )
}
var a2 = trocar.indexOf("d")
if ( 0 < a2)
{
  var real = trocar.replace(/d/g," Dias" )
}
var a3 = trocar.indexOf("m")
if ( 0 < a3)
{
  var real = trocar.replace(/m/g," Minutos" )
}
var a4 = trocar.indexOf("s")
if ( 0 < a4)
{
  var real = trocar.replace(/s/g," Segundos" )
}
if (achar2 !== null)return message.reply("Esse usuário já foi mutado por: " +real);

message.channel.send(`O usuário ${user} foi mutado no servidor por ${real}`)
    setTimeout(() => {
    client.guilds.get(message.guild.id).members.get(user.id).removeRole(cargoid)
    message.channel.send("O " + user + " Foi Desmutado!" )
}, temporeal)}