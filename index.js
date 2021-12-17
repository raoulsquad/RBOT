const { discord, Collection, Intents } = require('discord.js');
const Client = new discord.Client;

Client.on('ready', () => {
    Client.user.setPresence({ activities: [{name: "RBOT", type: "WATCHING"}] })
    console.log(`${Client.user.tag} is online!`)
})

Client.login("OTE5NjQ5MzUzMDc1OTI5MTQ4.YbY4NA.jmRnR4V9gxzja5m3_d2sBDp43VU");