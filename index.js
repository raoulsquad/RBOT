const { discord, Collection, Intents } = require('discord.js');
const Client = new discord.Client;

Client.on('ready', () => {
    Client.user.setPresence({ activities: [{name: "RBOT", type: "WATCHING"}] })
    console.log(`${Client.user.tag} is online!`)
})

Client.login("Cant do that in here");
