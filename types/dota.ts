export interface DotaPlayer {
  behaviorScore: number;
  firstMatchDate: number; //?
  matchCount: number;
  name: string;
  partyRank: number; //?
  ranks: Rank[];
  seasonRank: number;
  smurfCheckDate: number; //?
  smurfFlag: number;
  soloRank: number; //?
  winCount: number;
}

type Rank = {
  asOfDateTime: string;
  isCore: boolean;
  rank: number;
  seasonRankId: number;
};
