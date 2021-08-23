import fetch from 'node-fetch';
import { DotaPlayer } from '../../../types/dota';

const url = 'https://api.stratz.com/api/v1';

export async function getPlayerStats(steamId: string): Promise<DotaPlayer> {
  const res = await fetch(`${url}/player/${steamId}`);
  return await res.json();
}
