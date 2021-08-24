export const playedWithProsQuery = (steamId: number) => {
  `query {
    players(steamAccountIds: [${steamId}]) {
      playedWithPro {
        casters {
          steamId
          vs {
            date
            isVictory
            matchId
          }
          with {
            date
            isVictory
            matchId
          }
        }
        internationalWinners {
          players {
            steamId
            vs {
              date
              isVictory
              matchId
            }
            with {
              date
              isVictory
              matchId
            }
          }
          teamName 
          teamId
        }
        playedCount
      }
    }
  }`;
};

export const MatchTimeQuery = (matchId: number) => `query {
  match(id: ${matchId.toString()}) {
    startDateTime
  }
}`;
