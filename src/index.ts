import { Client, Intents, Interaction } from 'discord.js';
import { DISCORD_BOT_TOKEN, HaxPlayers } from './lib/constants';
import { randomUUID } from 'crypto';
import { getPlayerStats } from './lib/services/dota-api';
import { getEmbed } from './lib/embed';

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

  const { user, commandName } = interaction; //options

  const haxPlayer = HaxPlayers.find((player) => player.userId === user?.id);

  //const hero = options?.data[0]?.value;

  if (commandName === 'stats') {
    if (haxPlayer !== undefined) {
      const stats = await getPlayerStats(haxPlayer.steamId.toString());
      const embed = await getEmbed(stats);
      await interaction.reply({ embeds: [embed] });
    }
  }
});

client.login(DISCORD_BOT_TOKEN);
