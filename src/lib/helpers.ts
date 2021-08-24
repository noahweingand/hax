import { User } from 'discord.js';
import { HaxPlayers } from './constants';
import { Pros, Pro } from '../../types/dota';

export const getPlayer = (user: User, nameInput: string | undefined) => {
  return nameInput !== undefined
    ? HaxPlayers.find((player) => player.name === nameInput)
    : HaxPlayers.find((player) => player.userId === user?.id);
};

export const getPlayedWithProMatches = (pros: Pros) => {
  const casterMatches = pros.casters.filter(
    (caster) => caster.with !== undefined || caster.vs !== undefined,
  );

  let proTeams: Pro[] = [];
  pros.internationalWinners.forEach((team) => {
    proTeams.concat(team.players);
  });
  pros.teams.forEach((team) => {
    proTeams.concat(team.players);
  });

  const allTeamMatches = proTeams.filter(
    (team) => team.with !== undefined || team.vs !== undefined,
  );

  return { casterMatches, allTeamMatches };
};
