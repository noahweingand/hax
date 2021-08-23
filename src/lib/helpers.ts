import { HaxPlayers } from './constants';
import { User } from 'discord.js';

export const getPlayer = (
  user: User,
  nameInput: string | undefined,
): string | undefined => {
  const haxPlayerSelf = HaxPlayers.find((player) => player.userId === user?.id);

  return nameInput !== undefined
    ? HaxPlayers.find((player) => player.name === nameInput)?.steamId.toString()
    : haxPlayerSelf?.steamId.toString();
};
