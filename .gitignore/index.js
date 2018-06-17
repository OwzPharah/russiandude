const Discord = require('discord.js');

var bot = new Discord.Client();

bot.on('ready',() => {
    bot.user.setPresence({ game: { name: 'Mère Patrie'}});
    console.log("Bot Ready !");
});

bot.login("NDU3NTIyMzY4Nzc3Mjg5NzM4.DganHw.CkcUsdvjZfHKZUhq7zpfdK7h0iA");

bot.on("message", message => {
    if (message.content === "/tachanka")
        message.reply("LMG MOUNTED AND LOADED")
    if (message.content === "/cyka blyat")
        message.reply("https://i.ytimg.com/vi/PIvNhb0k1ng/maxresdefault.jpg")
    if (message.content === "/helpcomrade")
        var help_embed = new Discord.RichEmbed()
            .setColor('#FE3838')
            .addField("Commandes du bot comrade !"," \n /tachanka pour invoquer la sainte lmg \n /cyka blyat pour insulter des capitalistes \n /Slavyata pour du hardbass ")
            .setFooter("cyka blyat")
        message.channel.sendMessage(help_embed);
        console.log("Commande demandée!")
    if (message.content === "/Slavyata")
        message.reply("https://i.imgur.com/1V4cLR7.jpg")
});
