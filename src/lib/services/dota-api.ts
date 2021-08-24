import fetch from 'node-fetch';
import { DotaPlayer, Pros, Match } from '../../../types/dota';
import { MatchTimeQuery } from './queries';

const rest_url = 'https://api.stratz.com/api/v1';
const gql_url = 'https://api.stratz.com/graphql';

//async function getMatch(matchId: number) {}

export async function getPlayerStats(steamId: number): Promise<DotaPlayer> {
  const res = await fetch(`${rest_url}/player/${steamId}`);

  return await res.json();
}

export async function getPlayedWithPros(steamId: number): Promise<Pros> {
  const res = await fetch(`${rest_url}/player/${steamId}/playedWithPro`);

  return await res.json();
}

export async function getMatch(matchId: number): Promise<Match> {
  const res = await fetch(gql_url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: MatchTimeQuery(matchId) }),
  });

  const { data } = await res.json();
  return data.match;
}
