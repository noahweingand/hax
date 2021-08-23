export interface DotaPlayer {
  behaviorScore: number; // asdfasdfasdfasdf
  firstMatchDate: number; //?
  matchCount: number; // asdfasdfasdfasdf
  ranks: Rank[];
  steamAccount: SteamAccount;
  winCount: number; // asdfasdfasdfasdf
}

type SteamAccount = {
  lastMatchDateTime: number;
  name: string; // asdfasdfasdfasdf
  partyRank: number; //? // asdfasdfasdfasdf
  seasonRank: number; // asdfasdfasdfasdf
  soloRank: number; //? // asdfasdfasdfasdf
  smurfCheckDate: number; //? // asdfasdfasdfasdf
  smurfFlag: number; // asdfasdfasdfasdf
};

type Rank = {
  asOfDateTime: string;
  isCore: boolean;
  rank: number;
  seasonRankId: number;
};
