const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json');
const prefix = ayarlar.prefix;
const db = require('quick.db');

exports.run = async (client, message, args) => {
  const oynuyor = args.slice(0).join(' ')
      let oyndb = await db.set(`oynuyor`, `${oynuyor}`);
      let oyn = await db.fetch(`oynuyor`);  

  message.channel.send(`${oyn}`)
} //song function


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name : "oynuyor",
    usage: "oynuyor",
    description: "oynuyor"
};
