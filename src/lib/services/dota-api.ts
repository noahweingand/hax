import fetch from 'node-fetch';
import {
  DotaPlayerStratz,
  DotaPlayerOpen,
  DotaPlayerWinLoss,
  ProsStratz,
  ProsOpen,
  Match,
} from '../../../types/dota';
import { MatchTimeQuery } from './queries';

const stratzRestUrl = 'https://api.stratz.com/api/v1';
const stratzGqlUrl = 'https://api.stratz.com/graphql';
const openDotaUrl = 'https://api.opendota.com/api';

/* Stratz API calls */

export async function getPlayerInfo(
  steamId: number,
): Promise<DotaPlayerStratz> {
  const res = await fetch(`${stratzRestUrl}/player/${steamId}`);

  return await res.json();
}

export async function getPlayedWithPros(steamId: number): Promise<ProsStratz> {
  const res = await fetch(`${stratzRestUrl}/player/${steamId}/playedWithPro`);

  return await res.json();
}

export async function getMatch(matchId: number): Promise<Match> {
  const res = await fetch(stratzGqlUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: MatchTimeQuery(matchId) }),
  });

  const { data } = await res.json();
  return data.match;
}

/* OpenDota API calls */

export async function getPlayerStats(steamId: number): Promise<DotaPlayerOpen> {
  const res = await fetch(`${openDotaUrl}/players/${steamId}`);

  return await res.json();
}

export async function getWinLoss(steamId: number): Promise<DotaPlayerWinLoss> {
  const res = await fetch(`${openDotaUrl}/players/${steamId}/wl`);

  return await res.json();
}

export async function getPros(steamId: number): Promise<ProsOpen[]> {
  const res = await fetch(`${openDotaUrl}/players/${steamId}/pros`);

  return await res.json();
}
