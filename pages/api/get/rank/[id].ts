import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { API_URL_GET_RANK } from "../../../../utils/constants/constants";
import { Nullable, Rank } from "../../../../utils/types/type";

const fetch = async (accessId: string): Promise<Nullable<Rank[]>> => {
  const API_URL = API_URL_GET_RANK.replace("{accessid}", accessId);
  try {
    const response = await axios.get(API_URL, {
      headers: { Authorization: process.env.NEXT_PUBLIC_API_KEY },
    });
    switch (response.data.length) {
      case 3:
        return response.data.filter(
          (cur: Rank, idx: number) =>
            cur.matchType === 50 || cur.matchType === 52
        );
      case 2:
        let matchTypeArr = [50, 52];
        return response.data.map((cur: Rank, idx: number) => {
          const { matchType } = cur;
          if (matchType === 50 || matchType === 52) {
            matchTypeArr.splice(matchTypeArr.indexOf(matchType), 1);
            return cur;
          } else {
            return {
              matchType: matchTypeArr[0],
              division: 0,
              achievementDate: "",
            };
          }
        });
      case 1:
        const { matchType } = response.data[0] as Rank;
        if (matchType === 214) {
          return [
            {
              matchType: 50,
              division: 0,
              achievementDate: "",
            },
            {
              matchType: 52,
              division: 0,
              achievementDate: "",
            },
          ];
        } else {
          if (matchType === 50) {
            return [
              response.data[0],
              {
                matchType: 52,
                division: 0,
                achievementDate: "",
              },
            ];
          } else {
            return [
              {
                matchType: 50,
                division: 0,
                achievementDate: "",
              },
              response.data[0],
            ];
          }
        }
      default:
        return [
          {
            matchType: 50,
            division: 0,
            achievementDate: "",
          },
          {
            matchType: 52,
            division: 0,
            achievementDate: "",
          },
        ];
    }
  } catch (e) {
    console.error(e);
    return null;
  }
};

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<Nullable<Rank[]>>
) => {
  const { query } = req;
  const data = await fetch(query.id as string);
  res.status(200).json(data);
};

export default handler;
