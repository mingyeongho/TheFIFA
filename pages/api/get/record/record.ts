import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import {
  API_URL_GET_MATCH_DETAIL,
  API_URL_GET_MATCH_LIST,
  API_URL_GET_TRADE_LIST,
} from "../../../../utils/constants/constants";
import { MatchDTO, Nullable, TradeType } from "../../../../utils/types/type";

const fetch = async (
  accessId: string,
  type: string,
  category: string,
  offset: string
): Promise<Nullable<MatchDTO[] | TradeType[]>> => {
  if (type === "match") {
    const API_URL = API_URL_GET_MATCH_LIST.replace("{accessid}", accessId)
      .replace("{matchtype}", category)
      .replace("{offset}", offset);
    const res = await axios.get(API_URL, {
      headers: { Authorization: process.env.NEXT_PUBLIC_API_KEY },
    });
    if (res) {
      return Promise.all(
        res.data.map(async (cur: string): Promise<MatchDTO> => {
          const response = await axios.get(API_URL_GET_MATCH_DETAIL + cur, {
            headers: { Authorization: process.env.NEXT_PUBLIC_API_KEY },
          });
          return response.data;
        })
      );
    } else {
      return null;
    }
  } else {
    const API_URL = API_URL_GET_TRADE_LIST.replace("{accessid}", accessId)
      .replace("{tradetype}", category)
      .replace("{offset}", offset);
    const res = await axios.get(API_URL, {
      headers: { Authorization: process.env.NEXT_PUBLIC_API_KEY },
    });
    return res.data.map((cur: TradeType) => {
      return {
        ...cur,
        type: category,
      };
    });
  }
};

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<Nullable<MatchDTO[] | TradeType[]>>
) => {
  const { query } = req;
  const { id, type, category, offset } = query;
  if (
    typeof id === "string" &&
    typeof type === "string" &&
    typeof category === "string" &&
    typeof offset === "string"
  ) {
    const data = await fetch(id, type, category, offset);
    res.status(200).json(data);
  }
};

export default handler;
