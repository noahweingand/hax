import { Client, Intents, Interaction } from 'discord.js';
import { DISCORD_BOT_TOKEN } from './lib/constants';
import { randomUUID } from 'crypto';
import { getPlayer, getPlayedWithProMatches } from './lib/helpers';
import { getPlayerStats, getPlayedWithPros } from './lib/services/dota-api';
import { getStatsEmbed, replyPlayedWithProMsg } from './lib/embeds';

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
      const stats = await getPlayerStats(player?.steamId);

      const embed = await getStatsEmbed(stats);

      await interaction.reply({ embeds: [embed] });
    }
  } else if (commandName === 'played-with') {
    if (player !== undefined) {
      const pros = await getPlayedWithPros(player?.steamId);

      const { casterMatches, allTeamMatches } = getPlayedWithProMatches(pros);

      const reply = await replyPlayedWithProMsg(
        casterMatches,
        allTeamMatches,
        player?.name,
      );

      await interaction.reply(reply);
    }
  } else if (commandName === 'team') {
    if (player !== undefined) {
    }
  }
});

client.login(DISCORD_BOT_TOKEN);
