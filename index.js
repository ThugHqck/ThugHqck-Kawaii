const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const fs = require('fs');
const weather = require('weather-js');
 
fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunction = require(`./events/${file}`);
    let eventName = file.split(".")[0];
client.on(eventName, (...args) => eventFunction.run(client, ...args));
  });
});
client.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
 
  let args = message.content.split(" ").slice(1);
  // The list of if/else is replaced with those simple 2 lines:
 
  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    console.error(err);
  }
 
});

client.on("message", (message) => {
  if(message.content.startsWith("Kawaii")){
      var conteudo = message.content.replace("Kawaii","");
      if(!conteudo.length) return message.reply("coloque alguma coisa para eu responder")
const cleverbot = require('cleverbot.io');
let bot = new cleverbot('2JvPFfIj7khsi8qL', 'WfVxx4jBgiccUcD5NkUbYz8PjNjezSHl');
bot.setNick('vlad');
bot.create(function (err, session) {
  bot.ask(conteudo, function (err, response) {
      message.channel.send(response + "  <@" + message.author.id +">");
  });
});
  }
});



client.login(process.env.TOKEN);