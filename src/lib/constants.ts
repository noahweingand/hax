type HaxPlayer = {
  name: string;
  steamId: number;
  userId: string;
};

export const HaxPlayers: HaxPlayer[] = [
  {
    name: 'Austin',
    steamId: 106034326,
    userId: '223928126739054603',
  },
  {
    name: 'Ben',
    steamId: 116349078,
    userId: '218881550320664577',
  },
  {
    name: 'Brent',
    steamId: 81968524,
    userId: '163530712828346369',
  },
  {
    name: 'Malik',
    steamId: 386227878,
    userId: '229106142901436422',
  },
  {
    name: 'Pat',
    steamId: 96833866,
    userId: '77579956095287296',
  },
  {
    name: 'Tyler',
    steamId: 95999142,
    userId: '133007518652825611',
  },
  {
    name: 'Zach',
    steamId: 60173042,
    userId: '149587542600056832',
  },
  {
    name: 'Noah',
    steamId: 83813536,
    userId: '230876090690699264',
  },
];

export const ProPlayers = {
  Blitz: {
    steamId: 106781506,
    name: 'Blitz',
  },
  PyrionFlax: {
    name: 'PyrionFlax',
    steamId: 9332911,
  },
};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      ENV: 'dev' | 'prod';
      DISCORD_BOT_TOKEN: string;
      DISCORD_CLIENT_ID: string;
      DISCORD_GUILD_ID: string;
    }
  }
}

export const DISCORD_BOT_TOKEN = process.env.DISCORD_BOT_TOKEN;
export const DISCORD_CLIENT_ID = process.env.DISCORD_CLIENT_ID;
export const DISCORD_GUILD_ID = process.env.DISCORD_GUILD_ID;
