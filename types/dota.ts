/* -------------Stats Types-------------- */
export interface DotaPlayerStratz {
  behaviorScore: number;
  firstMatchDate: number;
  steamAccount: SteamAccount;
}

export interface DotaPlayerOpen {
  solo_competitive_rank: number;
  competitive_rank: number;
  mmr_estimate: {
    estimate: number;
  };
  rank_tier: number;
}

export interface DotaPlayerWinLoss {
  win: number;
  lose: number;
}

export interface ProsOpen {
  name: string;
  team_name: string;
  personaname: string;
  with_win: number;
  with_games: number;
  against_win: number;
  against_games: number;
  last_played: number; // not sure if this is the right date for matches
}

type SteamAccount = {
  lastMatchDateTime: number;
  name: string;
  partyRank: number;
  smurfCheckDate: number;
  smurfFlag: number;
};

/* -------------Pro Types-------------- */
export interface ProsStratz {
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
