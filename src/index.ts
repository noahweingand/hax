import { Client, Intents, Interaction } from 'discord.js';
import { DISCORD_BOT_TOKEN } from './lib/constants';
import { randomUUID } from 'crypto';
import { getPlayer } from './lib/helpers';
import { getPlayerStats } from './lib/services/dota-api';
import { getStatsEmbed } from './lib/embeds';

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

  const { user, commandName, options } = interaction;
  const allOptions = options?.data;

  const nameInput = allOptions[0]?.value?.toString();
  const player = getPlayer(user, nameInput);

  if (commandName === 'stats') {
    if (player !== undefined) {
      const stats = await getPlayerStats(player);

      const embed = await getStatsEmbed(stats);

      await interaction.reply({ embeds: [embed] });
    }
  }

  if (commandName === 'played-with') {
    if (player !== undefined) {
    }
  }
});

client.login(DISCORD_BOT_TOKEN);
