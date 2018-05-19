const gifSearch = require("gif-search");

exports.run = (client, message, args) => {

        gifSearch.random("dog").then(
            gifUrl => message.channel.sendMessage({
                "embed": {
                    "title": ":dog: Cachorro aleatório:",
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