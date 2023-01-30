export const API_URL = {
  getUser: (nickname: string) =>
    `https://api.nexon.co.kr/fifaonline4/v1.0/users?nickname=${nickname}`,
  getMaxDivision: (accessId: string) =>
    `https://api.nexon.co.kr/fifaonline4/v1.0/users/${accessId}/maxdivision`,
  getMatchRecord: ({
    accessid,
    matchtype,
  }: {
    accessid: string;
    matchtype: string;
  }) =>
    `https://api.nexon.co.kr/fifaonline4/v1.0/users/${accessid}/matches?matchtype=${matchtype}&offset=0&limit=20`,
  getMatchItem: (matchId: string) =>
    `https://api.nexon.co.kr/fifaonline4/v1.0/matches/${matchId}`,
  getTradeRecord: ({
    accessid,
    tradetype,
  }: {
    accessid: string;
    tradetype: "buy" | "sell";
  }) =>
    `https://api.nexon.co.kr/fifaonline4/v1.0/users/${accessid}/markets?tradetype=${tradetype}&offset=0&limit=20`,
};

export const LOGO = "TheFIFA";

export const API_KEY = import.meta.env.VITE_API_KEY;

export const FOOTER = `Data based on NEXON DEVELOPERS`;

export const SEARCHRECORD = "SearchRecord";
