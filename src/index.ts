import { Client, Intents, Interaction } from 'discord.js';
import { randomUUID } from 'crypto';

import { DISCORD_BOT_TOKEN } from './lib/constants';
import {
  getPlayerInfo,
  getPlayerStats,
  getWinLoss,
  getPlayedWithPros,
  getPros,
} from './lib/services/dota-api';
import { getPlayer, getPlayedWithProMatches } from './lib/helpers';
import {
  getStatsEmbed,
  replyProStratzMsg,
  replyProOpenMsg,
  getProEmbed,
} from './lib/embeds';

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
      const info = await getPlayerInfo(player?.steamId);
      const stats = await getPlayerStats(player?.steamId);
      const wL = await getWinLoss(player?.steamId);

      const embed = await getStatsEmbed(info, stats, wL);

      await interaction.reply({ embeds: [embed] });
    }
  } else if (commandName === 'played-with') {
    await interaction.deferReply();

    if (player !== undefined) {
      const stratzPros = await getPlayedWithPros(player?.steamId);
      const { casterMatches, allTeamMatches } =
        getPlayedWithProMatches(stratzPros);

      const stratzReply = await replyProStratzMsg(
        casterMatches,
        allTeamMatches,
        player?.name,
      );

      const openPros = await getPros(player.steamId);
      let openDotaReply = replyProOpenMsg(player.name, openPros);

      const proEmbed = getProEmbed(openDotaReply, player.name);

      await interaction.channel?.send({ embeds: [proEmbed] });
      await interaction.channel?.send(stratzReply);
      await interaction.editReply('Pro Match details below!');
    }
  }
});

client.login(DISCORD_BOT_TOKEN);
