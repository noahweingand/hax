import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';
import {
  DISCORD_BOT_TOKEN,
  DISCORD_CLIENT_ID,
  DISCORD_GUILD_ID,
  commands,
} from './constants';

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
