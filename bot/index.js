// index.js
const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config(); // Load environment variables from .env file

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
});

client.once('ready', () => {
  console.log('Bot is online!');
});

client.on('messageCreate', (message) => {
  if (message.content.toLowerCase() === 'ping') {
    message.channel.send('Pong!');
  }
});

client.login(process.env.DISCORD_BOT_TOKEN);
