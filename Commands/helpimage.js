const Discord = require("discord.js");

module.exports = {
    name: "helpimage",
    description: "Get Image Manipulation commands",
    run: async(client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Image Commands")
    .setDescription("`achievement`, `amazeme`, `amiajoke`, `bad`, `catsay`, `challenge`, `changemymind`, `didyoumean`, `drake`, `facts`, `illegal`, `jokeoverhead`, `meme`, `pornhub`, `scroll`, `tableflip`, `textimage`, `trash`");
    message.channel.send(embed);
   }
}
