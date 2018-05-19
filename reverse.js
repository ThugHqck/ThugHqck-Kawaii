var Discord = require('discord.js');
const request = require('request');

exports.run = (client, message, args)  => {

    let reason = args.slice(0).join(' ');

      if (reason.length < 1) return message.reply('**Diga oque devo reverter!**');

    message.channel.sendMessage(args.join(' ').split('').reverse().join(''));

}