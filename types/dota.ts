/* -------------Stats Types-------------- */
export interface DotaPlayer {
  behaviorScore: number;
  firstMatchDate: number;
  matchCount: number;
  ranks: Rank[];
  steamAccount: SteamAccount;
  winCount: number;
}

type SteamAccount = {
  lastMatchDateTime: number;
  name: string;
  partyRank: number;
  seasonRank: number;
  soloRank: number;
  smurfCheckDate: number;
  smurfFlag: number;
};

type Rank = {
  asOfDateTime: string;
  isCore: boolean;
  rank: number;
  seasonRankId: number;
};

/* -------------Pro Types-------------- */
export interface Pros {
  casters: Pro[];
  internationalWinners: ProTeam[];
  teams: ProTeam[];
  playedCount: number;
}

export type ProTeam = {
  teamId: number;
  teamName: string;
  players: Pro[];
};

export type Pro = {
  name: string;
  steamId: string;
  vs: ProMatch;
  with: ProMatch;
};

export type ProMatch = {
  date: number;
  isVictory: boolean;
  matchId: number;
};

export interface Match {
  startDateTime: number;
}

/* -------------Team Types-------------- */
