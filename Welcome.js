//Get discord.js
const Discord = require('discord.js');

//Create client instance as bot
const botRem = new Discord.Client();

//Set listener on 'ready'
botRem.on('ready', () => {
  console.log('GM Jane ready!');
});

//Set listener on 'message'
botRem.on('message', message => {
  if (message.content === 'hi') {
    message.reply('No hi for you');
  }
});

botRem.login('399869036688834560');
