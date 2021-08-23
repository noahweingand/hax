import { MessageEmbed } from 'discord.js';
import { DotaPlayer } from '../../types/dota';

const convertEpochDateTime = (epochDateTime: number) => {
  const date = new Date(epochDateTime * 1000);
  return date.toString();
};

export const getEmbed = async (stats: DotaPlayer): Promise<MessageEmbed> => {
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
    .setTitle(`Dota 2 Stats`)
    .setAuthor('Hax Cuck Bot')
    .setDescription(`${name}'s stats`)
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
