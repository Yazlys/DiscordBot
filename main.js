// Initialize dotenv
require('dotenv').config({path:'main.env'});

// Import
const { Client, GatewayIntentBits } = require('discord.js');

// Declare intents
const client = new Client({intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageTyping,
    GatewayIntentBits.MessageContent
]});

// Start
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});


// Log in our bot
client.login(process.env.CLIENT_TOKEN);

client.on('messageCreate', msg => {
    if(msg.content.includes("Hello") && !msg.author.bot) {
        msg.reply(`Hello ${msg.author.username} !`);
    }
});