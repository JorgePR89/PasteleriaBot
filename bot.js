const TelegramBot = require('node-telegram-bot-api');
const axios = require('axios')

// API Token Telegram
const token = '1011287689:AAHZKEJcjLlLTPv3-MA-b6-YWA6WJoYyLQA';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

// Cuando mandes el mensaje "Hola" reconoce tú nombre y genera un input: Hola Daniel

bot.onText(/^\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, 'Bienvenido a nuestra pasteleria ' + msg.from.first_name + '. Si quieres saber cual es nuestro especial del dia utiliza la palabra clave /especial');
});

bot.onText(/^\/especial/, (msg) => {
    axios.get("https://xz94zfs6u8.execute-api.eu-west-1.amazonaws.com/default/myBakery")
        .then((response) => {
            bot.sendMessage(msg.chat.id, response.data);
        });

});