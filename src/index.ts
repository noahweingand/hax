import dotenv from 'dotenv';
import Discord, { Client, Intents, Message } from 'discord.js';
if (process.env.ENV === 'dev') {
  dotenv.config();
}

const DISCORD_BOT_TOKEN = process.env.DISCORD_BOT_API_KEY;

const intents = new Intents(Intents.FLAGS.GUILD_MESSAGES);

const client = new Client({
  intents: [intents],
  partials: ['CHANNEL', 'MESSAGE', 'REACTION'],
  restRequestTimeout: 60000,
});

client.on('message', (msg: Message) => {});

client.login(DISCORD_BOT_TOKEN);
