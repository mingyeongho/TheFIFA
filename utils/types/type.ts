export type Nullable<T> = null | T;

export type User = {
  accessId: string;
  nickname: string;
  level: number;
};

export type Rank = {
  matchType: number;
  division: number;
  achievementDate: string;
};
