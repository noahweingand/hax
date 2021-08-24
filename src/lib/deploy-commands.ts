import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';
import {
  SlashCommandBuilder,
  SlashCommandStringOption,
} from '@discordjs/builders';
import {
  DISCORD_BOT_TOKEN,
  DISCORD_CLIENT_ID,
  DISCORD_GUILD_ID,
} from './constants';

export const commands = [
  new SlashCommandBuilder()
    .setName('stats')
    .setDescription(`Get global stats for a HAX player`)
    .addStringOption((option: SlashCommandStringOption) =>
      option
        .setName('name')
        .setDescription(`Name of the user you want stats for`)
        .addChoices([
          ['Austin', 'Austin'],
          ['Ben', 'Ben'],
          ['Brent', 'Brent'],
          ['Malik', 'Malik'],
          ['Pat', 'Pat'],
          ['Tyler', 'Tyler'],
          ['Zach', 'Zach'],
        ])
        .setRequired(false),
    ),
  new SlashCommandBuilder()
    .setName('hero-perf')
    .setDescription(`Grabs hero specific performance by a HAX player`)
    .addStringOption((option: SlashCommandStringOption) =>
      option
        .setName('hero')
        .setDescription(`Dota hero's name`)
        .setRequired(true),
    )
    .addStringOption((option: SlashCommandStringOption) =>
      option
        .setName('name')
        .setDescription(`Name of the user you want stats for`)
        .addChoices([
          ['Austin', 'Austin'],
          ['Ben', 'Ben'],
          ['Brent', 'Brent'],
          ['Malik', 'Malik'],
          ['Pat', 'Pat'],
          ['Tyler', 'Tyler'],
          ['Zach', 'Zach'],
        ])
        .setRequired(false),
    ),
  new SlashCommandBuilder()
    .setName('last-match')
    .setDescription(`Retrieves last match detail`)
    .addStringOption((option: SlashCommandStringOption) =>
      option
        .setName('name')
        .setDescription(`Name of the user you want stats for`)
        .addChoices([
          ['Austin', 'Austin'],
          ['Ben', 'Ben'],
          ['Brent', 'Brent'],
          ['Malik', 'Malik'],
          ['Pat', 'Pat'],
          ['Tyler', 'Tyler'],
          ['Zach', 'Zach'],
        ])
        .setRequired(false),
    ),
  new SlashCommandBuilder()
    .setName('played-with')
    .setDescription(`Returns matches played with either pros or casters`)
    .addStringOption((option: SlashCommandStringOption) =>
      option
        .setName('name')
        .setDescription(`Name of the user you want stats for`)
        .addChoices([
          ['Austin', 'Austin'],
          ['Ben', 'Ben'],
          ['Brent', 'Brent'],
          ['Malik', 'Malik'],
          ['Pat', 'Pat'],
          ['Tyler', 'Tyler'],
          ['Zach', 'Zach'],
        ])
        .setRequired(false),
    ),
  new SlashCommandBuilder()
    .setName('team')
    .setDescription(`Retrieves team averages/summaries`),
].map((command) => command.toJSON());

const rest = new REST({ version: '9' }).setToken(DISCORD_BOT_TOKEN);

(async () => {
  try {
    await rest.put(
      Routes.applicationGuildCommands(DISCORD_CLIENT_ID, DISCORD_GUILD_ID),
      {
        body: commands,
      },
    );

    console.log('Successfully registered application commands.');
  } catch (error) {
    console.error(error);
  }
})();
