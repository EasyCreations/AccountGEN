const Discord = require('discord.js');
const client = new Discord.Client();
const db = require('quick.db');
const { prefix, token } = require('./config.json');
const fivereborn = require('fivereborn-query');
const configs = require("./configs.json");
const guild = client.guilds.cache.get("785961609318891540");

const bot = client

const fs = require('fs');
const { format } = require('path');

client.commands = new Discord.Collection();
