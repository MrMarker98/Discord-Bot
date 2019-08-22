const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});

client.on('message', msg => {
  if (msg.content === 'heck') {
    msg.reply('dang it, dont heck!');
  }
});

client.on('message', msg => {
  if (msg.content === 'SEPPUKU') {
    msg.reply('Commited seppuku. You wont live.');
    msg.reply('WAT YOU LIVE!?');
  }
});

client.login(auth.token);
