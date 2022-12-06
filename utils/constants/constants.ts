import matchTypeJson from "../json/matchType.json";

export const LOGO = "TheFIFA";
export const NEXON = "Data based on NEXON DEVELOPERS";

export const MatchType = [
  {
    type: "match",
    desc: "매치 기록",
  },
  {
    type: "trade",
    desc: "거래 기록",
  },
];

export const category = [
  {
    type: "match",
    value: matchTypeJson,
  },
  {
    type: "trade",
    value: [
      {
        type: "buy",
        desc: "구매",
      },
      {
        type: "sell",
        desc: "판매",
      },
    ],
  },
];

export const API_URL_GET_USER =
  "https://api.nexon.co.kr/fifaonline4/v1.0/users?nickname=";
export const API_URL_GET_RANK =
  "https://api.nexon.co.kr/fifaonline4/v1.0/users/{accessid}/maxdivision";
export const API_URL_GET_MATCH_LIST =
  "https://api.nexon.co.kr/fifaonline4/v1.0/users/{accessid}/matches?matchtype={matchtype}&offset={offset}&limit=30";
export const API_URL_GET_TRADE_LIST =
  "https://api.nexon.co.kr/fifaonline4/v1.0/users/{accessid}/markets?tradetype={tradetype}&offset={offset}&limit=30";
export const API_URL_GET_MATCH_DETAIL =
  "https://api.nexon.co.kr/fifaonline4/v1.0/matches/";
export const API_URL_GET_PLAYER_IMG =
  "https://fo4.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p{spid}.png";
export const API_URL_GET_PLAYER_NORMAL_IMG =
  "https://fo4.dn.nexoncdn.co.kr/live/externalAssets/common/players/p{pid}.png";
