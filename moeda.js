var Discord = require('discord.js');

exports.run = (client, message, args) => {

let randomNumber = ~~(Math.random() * (4- 1) + 1);
        if (randomNumber == 2)
            message.reply("Caiu Cara! 😀");
        else
            message.reply("Caiu Coroa! 👑");
}            