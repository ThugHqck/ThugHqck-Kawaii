const gifSearch = require("gif-search");

exports.run = (client, message, args) => {

        gifSearch.random("cat").then(
            gifUrl => message.channel.sendMessage({
                "embed": {
                    "title": ":heart_eyes_cat: Gato aleatório:",
                    "color": 0xE57380,
                    "timestamp": new Date(),
                    "footer": {
                        "icon_url": message.author.displayAvatarURL,
                        "text": message.author.username
                    },
                    "image": {
                        "url": gifUrl
                    }
                }
            })
        );

}