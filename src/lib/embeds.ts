import { MessageEmbed } from 'discord.js';
import { DotaPlayer, Pro } from '../../types/dota';
import { ProPlayers } from './constants';

const convertEpochDateTime = (epochDateTime: number) => {
  const date = new Date(epochDateTime * 1000);
  return date.toLocaleString();
};

export const getStatsEmbed = async (
  stats: DotaPlayer,
): Promise<MessageEmbed> => {
  const {
    name,
    soloRank,
    partyRank,
    seasonRank,
    smurfFlag,
    smurfCheckDate,
    lastMatchDateTime,
  } = stats?.steamAccount;

  return new MessageEmbed()
    .setColor('#0099ff')
    .setTitle(`${name}'s stats`)
    .setAuthor('Hax Cuck Bot')
    .addFields(
      {
        name: 'Solo Rank',
        value: `${soloRank}`,
        inline: true,
      },
      {
        name: 'Party Rank',
        value: `${partyRank}`,
        inline: true,
      },
      {
        name: 'Season Rank',
        value: `${seasonRank}`,
        inline: true,
      },
      { name: '\u200B', value: '\u200B' },
      { name: 'Win Count', value: `${stats?.winCount}`, inline: true },
      { name: 'Match Total', value: `${stats?.matchCount}`, inline: true },
      { name: '\u200B', value: '\u200B' },
      {
        name: 'Behavior Score',
        value: `${stats?.behaviorScore}`,
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
        value: `${convertEpochDateTime(stats?.firstMatchDate)}`,
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

export const replyPlayedWithProMsg = async (
  casterMatches: Pro[],
  teamMatches: Pro[],
  playerName: string,
) => {
  let msg = `------------Played with pros data------------\n`;

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
