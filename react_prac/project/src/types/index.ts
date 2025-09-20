export interface User {
  id: string;
  email: string;
  username: string;
  role: 'player' | 'clan_leader' | 'admin';
  playerTag?: string;
  clanTag?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Player {
  tag: string;
  name: string;
  townHallLevel: number;
  expLevel: number;
  trophies: number;
  bestTrophies: number;
  warStars: number;
  attackWins: number;
  defenseWins: number;
  builderHallLevel?: number;
  clan?: {
    tag: string;
    name: string;
    role: string;
  };
  league?: {
    id: number;
    name: string;
    iconUrls: {
      small: string;
      tiny: string;
      medium: string;
    };
  };
  achievements: Achievement[];
  troops: Troop[];
  heroes: Hero[];
  spells: Spell[];
}

export interface Clan {
  tag: string;
  name: string;
  type: string;
  description: string;
  location?: {
    id: number;
    name: string;
    isCountry: boolean;
    countryCode?: string;
  };
  badgeUrls: {
    small: string;
    large: string;
    medium: string;
  };
  clanLevel: number;
  clanPoints: number;
  clanVersusPoints: number;
  requiredTrophies: number;
  warFrequency: string;
  warWinStreak: number;
  warWins: number;
  warTies?: number;
  warLosses?: number;
  isWarLogPublic: boolean;
  warLeague?: {
    id: number;
    name: string;
  };
  members: number;
  memberList: ClanMember[];
}

export interface ClanMember {
  tag: string;
  name: string;
  role: string;
  expLevel: number;
  league?: {
    id: number;
    name: string;
    iconUrls: {
      small: string;
      tiny: string;
      medium: string;
    };
  };
  trophies: number;
  versusTrophies: number;
  clanRank: number;
  previousClanRank: number;
  donations: number;
  donationsReceived: number;
}

export interface War {
  state: 'notInWar' | 'preparation' | 'inWar' | 'warEnded';
  teamSize: number;
  preparationStartTime?: string;
  startTime?: string;
  endTime?: string;
  clan: WarClan;
  opponent: WarClan;
}

export interface WarClan {
  tag: string;
  name: string;
  badgeUrls: {
    small: string;
    large: string;
    medium: string;
  };
  clanLevel: number;
  attacks?: number;
  stars: number;
  destructionPercentage: number;
  members: WarMember[];
}

export interface WarMember {
  tag: string;
  name: string;
  townhallLevel: number;
  mapPosition: number;
  attacks?: WarAttack[];
  bestOpponentAttack?: WarAttack;
  opponentAttacks: number;
}

export interface WarAttack {
  attackerTag: string;
  defenderTag: string;
  stars: number;
  destructionPercentage: number;
  order: number;
}

export interface Achievement {
  name: string;
  stars: number;
  value: number;
  target: number;
  info: string;
  completionInfo?: string;
  village: string;
}

export interface Troop {
  name: string;
  level: number;
  maxLevel: number;
  village: string;
}

export interface Hero {
  name: string;
  level: number;
  maxLevel: number;
  village: string;
}

export interface Spell {
  name: string;
  level: number;
  maxLevel: number;
  village: string;
}

export interface WarHistory {
  id: string;
  clanTag: string;
  warData: War;
  result: 'won' | 'lost' | 'tied';
  createdAt: string;
}

export interface PerformanceMetrics {
  totalWars: number;
  warWins: number;
  warLosses: number;
  warTies: number;
  winRate: number;
  averageStars: number;
  averageDestruction: number;
  perfectWars: number;
  recentPerformance: {
    date: string;
    stars: number;
    destruction: number;
    attacks: number;
  }[];
}