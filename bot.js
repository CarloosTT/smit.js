const Discord = require('discord.js');
const bot = new Discord.Client();

const config = require('./config.json');
const links = require('./links.json');

bot.on('ready', () => {
    bot.user.setActivity('e assistindo hentai')
    console.log('Logado')
});

bot.on('message', (message) => {

    if(message.content.toLocaleLowerCase() == '!ping') {
       // message.reply('pong!');
       message.channel.sendMessage('Pong!');
    }

    if(message.content.toLocaleLowerCase() == 'viado') {
        message.reply('você é um viado <3')
    }

    let responseObject = {
        "oi" : "Olá, como vai?",
        "vou bem, e você?" : "Estou ótima ;)",
        "qual o melhor servidor de minecraft?" : "LikeKits ;)"
    };

    if(responseObject[message.content]){
        message.channel.send(responseObject[message.content]);
    }

    if (message.content.toLocaleLowerCase().startsWith("!roleta")){
        randomNumber = Math.floor(Math.random() * (6 - 1) + 1);
        if(randomNumber == 2){
            message.reply("Você perdeu!");
        }
        else{
            message.reply("Você sobreviveu!");
        }
    }

    responseObject = links;
    if(responseObject[message.content]){
        message.channel.send(responseObject[message.content]);
    }

});

bot.login('NDc2NTQ4NjAzNjIwNjIyMzcx.Dk3cRA.qFeK6MBdYQgXjBbNYAzUz_uc2Qc');
