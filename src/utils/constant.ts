export const API_URL = {
  getUser: (nickname: string) =>
    `https://api.nexon.co.kr/fifaonline4/v1.0/users?nickname=${nickname}`,
  getMaxDivision: (accessId: string) =>
    `https://api.nexon.co.kr/fifaonline4/v1.0/users/${accessId}/maxdivision`,
};

export const META_URL = {
  matchType: `https://static.api.nexon.co.kr/fifaonline4/latest/matchtype.json`,
  divisionOffical: `https://static.api.nexon.co.kr/fifaonline4/latest/division.json`,
};

export const API_KEY = import.meta.env.VITE_API_KEY;
