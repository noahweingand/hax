import { MessageEmbed } from 'discord.js';
import {
  DotaPlayerStratz,
  DotaPlayerOpen,
  DotaPlayerWinLoss,
  Pro,
  ProsOpen,
} from '../../types/dota';
import { ProPlayers } from './constants';

const convertEpochDateTime = (epochDateTime: number) => {
  const date = new Date(epochDateTime * 1000);
  return date.toLocaleString();
};

export const getStatsEmbed = async (
  info: DotaPlayerStratz,
  stats: DotaPlayerOpen,
  wL: DotaPlayerWinLoss,
): Promise<MessageEmbed> => {
  const { name, partyRank, smurfFlag, smurfCheckDate, lastMatchDateTime } =
    info?.steamAccount;
  const { solo_competitive_rank, competitive_rank, mmr_estimate, rank_tier } =
    stats;

  return new MessageEmbed()
    .setColor('#0099ff')
    .setTitle(`${name}'s stats`)
    .setAuthor('Hax Cuck Bot')
    .addFields(
      {
        name: 'Solo Rank',
        value: `${
          solo_competitive_rank === null ? 'N/A' : solo_competitive_rank
        }`,
        inline: true,
      },
      {
        name: 'Party Rank',
        value: `${partyRank === undefined ? 'N/A' : partyRank}`,
        inline: true,
      },
      {
        name: 'Season Rank',
        value: `${rank_tier === null ? 'N/A' : rank_tier}`,
        inline: true,
      },
      { name: '\u200B', value: '\u200B' },
      {
        name: 'Competitve Rank',
        value: `${competitive_rank === null ? 'N/A' : competitive_rank}`,
        inline: true,
      },
      {
        name: 'MMR Estimate',
        value: `${
          mmr_estimate.estimate === undefined ? 'N/A' : mmr_estimate.estimate
        }`,
        inline: true,
      },
      { name: '\u200B', value: '\u200B' },
      { name: 'Win Count', value: `${wL?.win}`, inline: true },
      { name: 'Loss Count', value: `${wL?.lose}`, inline: true },
      { name: 'Match Total', value: `${wL?.win + wL?.lose}`, inline: true },
      { name: '\u200B', value: '\u200B' },
      {
        name: 'Behavior Score',
        value: `${
          info?.behaviorScore === undefined ? 'N/A' : info?.behaviorScore
        }`,
        inline: true,
      },
      {
        name: 'Smurf Likely?',
        value: `${smurfFlag === 0 ? 'No' : 'Possibly'}`,
        inline: true,
      },
      {
        name: 'Smurf Check Date?',
        value: `${convertEpochDateTime(smurfCheckDate)}`,
        inline: true,
      },
      { name: '\u200B', value: '\u200B' },
      {
        name: 'First Match Date',
        value: `${convertEpochDateTime(info?.firstMatchDate)}`,
        inline: true,
      },
      {
        name: 'Last Match Date',
        value: `${convertEpochDateTime(lastMatchDateTime)}`,
        inline: true,
      },
    )
    .setTimestamp()
    .setFooter('Github', 'https://github.com/noahweingand/hax');
};

export const replyProStratzMsg = async (
  casterMatches: Pro[],
  teamMatches: Pro[],
  playerName: string,
) => {
  let msg = `------------Played With Pros Stratz data------------\n`;

  if (casterMatches.length !== 0) {
    for (const match of casterMatches) {
      const winOrVs = match?.vs ? match?.vs : match?.with;

      const { date, isVictory } = winOrVs;

      msg =
        msg +
        `${playerName} played ${match?.with ? 'with' : 'against'} ${
          parseInt(match?.steamId, 10) === ProPlayers.Blitz.steamId
            ? ProPlayers.Blitz.name
            : ProPlayers.PyrionFlax.name
        } on ${convertEpochDateTime(date)} and ${
          isVictory ? 'WON' : 'LOST'
        }.\n`;
    }
  } else {
    msg = msg + `You have not played with any casters.\n`;
  }

  if (teamMatches.length !== 0) {
    for (const match of casterMatches) {
      const winOrVs = match?.vs ? match?.vs : match?.with;

      const { date, isVictory } = winOrVs;

      msg =
        msg +
        `${playerName} played ${match?.with ? 'with' : 'against'} ${
          parseInt(match?.steamId, 10) === ProPlayers.Blitz.steamId
            ? ProPlayers.Blitz.name
            : ProPlayers.PyrionFlax.name
        } on ${convertEpochDateTime(date)} and ${
          isVictory ? 'WON' : 'LOST'
        }.\n`;
    }
  } else {
    msg =
      msg + `You have not played with any international winners or teams.\n`;
  }

  return msg;
};

export const getProEmbed = (msg: string, playerName: string) => {
  return new MessageEmbed()
    .setColor('#0099ff')
    .setTitle(`${playerName}'s OpenDota Matches w/ Pros Stats`)
    .setAuthor('Hax Cuck Bot')
    .setDescription(msg);
};

export const replyProOpenMsg = (playerName: string, pros: ProsOpen[]) => {
  let msg = ``;

  pros.forEach((pro) => {
    const withFlag = pro.with_games !== 0 ? true : false;
    const againstFlag = pro.against_games !== 0 ? true : false;
    if (withFlag === true) {
      msg =
        msg +
        `${playerName} played with ${pro.name} (${pro.personaname}) ${
          pro.team_name !== null ? 'from ' + pro.team_name : ''
        } ${pro.with_games} times and WON ${pro.with_win} times.\n`;
    }
    if (againstFlag === true) {
      msg =
        msg +
        `${playerName} played against ${pro.name} (${pro.personaname}) ${
          pro.team_name !== null ? 'from ' + pro.team_name : ''
        } ${pro.against_games} times and WON ${pro.against_win} times.\n`;
    }
  });

  return msg;
};
