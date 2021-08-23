import * as dotenv from 'dotenv';
import {
  SlashCommandBuilder,
  SlashCommandStringOption,
} from '@discordjs/builders';

dotenv.config();

export const SteamIds = {
  austin: {
    steamId: 106034326,
    userId: '223928126739054603',
  },
  ben: {
    steamId: 116349078,
    userId: '218881550320664577',
  },
  brent: {
    steamId: 81968524,
    userId: '163530712828346369',
  },
  malik: {
    steamId: 386227878,
    userId: '229106142901436422',
  },
  pat: {
    steamId: 96833866,
    userId: '77579956095287296',
  },
  tyler: {
    steamId: 95999142,
    userId: '133007518652825611',
  },
  zach: {
    steamId: 60173042,
    userId: '149587542600056832',
  },
};

export const commands = [
  new SlashCommandBuilder()
    .setName('stats')
    .setDescription(`Get global stats for a HAX player`)
    .addStringOption((option: SlashCommandStringOption) =>
      option
        .setName('name')
        .setDescription(`HAX member's name`)
        .setRequired(true),
    ),
  new SlashCommandBuilder()
    .setName('hero-perf')
    .setDescription(`Grabs hero specific performance by a HAX player`)
    .addStringOption((option: SlashCommandStringOption) =>
      option
        .setName('name')
        .setDescription(`HAX member's name`)
        .setRequired(true),
    )
    .addStringOption((option: SlashCommandStringOption) =>
      option
        .setName('hero')
        .setDescription(`Dota hero's name`)
        .setRequired(true),
    ),
  new SlashCommandBuilder()
    .setName('last-match')
    .setDescription(`Retrieves last match detail`)
    .addStringOption((option: SlashCommandStringOption) =>
      option
        .setName('name')
        .setDescription(`HAX member's name`)
        .setRequired(true),
    ),
  new SlashCommandBuilder()
    .setName('played-with')
    .setDescription(`Returns matches played with either pros or casters`)
    .addStringOption((option: SlashCommandStringOption) =>
      option
        .setName('name')
        .setDescription(`HAX member's name`)
        .setRequired(true),
    ),
].map((command) => command.toJSON());

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      ENV: 'dev' | 'prod';
      DISCORD_BOT_TOKEN: string;
      DISCORD_CLIENT_ID: string;
      DISCORD_GUILD_ID: string;
    }
  }
}

export const DISCORD_BOT_TOKEN = process.env.DISCORD_BOT_TOKEN;
export const DISCORD_CLIENT_ID = process.env.DISCORD_CLIENT_ID;
export const DISCORD_GUILD_ID = process.env.DISCORD_GUILD_ID;
