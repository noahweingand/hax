import { Client, Intents, Interaction } from 'discord.js';
import { DISCORD_BOT_TOKEN } from './lib/constants';
import { randomUUID } from 'crypto';

const intents = new Intents([
  Intents.FLAGS.GUILDS,
  Intents.FLAGS.GUILD_MESSAGES,
]);

const client = new Client({
  intents: [intents],
  restRequestTimeout: 60000,
});

client.on('ready', () => {
  console.log('Hax Cuck Shame Bot is ready!');
});

client.on('interactionCreate', async (interaction: Interaction) => {
  console.log(`Interaction ID - ${randomUUID()}`);

  if (!interaction.isCommand()) return;

  const { commandName } = interaction;

  if (commandName === 'stats') {
    try {
      await interaction.reply('wassup widdit');
    } catch (e) {
      console.log(e);
    }
  }
});

client.login(DISCORD_BOT_TOKEN);
