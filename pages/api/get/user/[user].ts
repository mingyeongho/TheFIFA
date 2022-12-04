import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { API_URL_GET_USER } from "../../../../utils/constants/constants";
import { Nullable, User } from "../../../../utils/types/type";

const fetch = async (nickname: string): Promise<Nullable<User>> => {
  const API_URL = API_URL_GET_USER + nickname;
  try {
    const response = await axios.get(API_URL, {
      headers: { Authorization: process.env.NEXT_PUBLIC_API_KEY },
    });
    if (response.status === 200) {
      return response.data;
    } else {
      return null;
    }
  } catch (e) {
    console.error(e);
    return null;
  }
};

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<Nullable<User>>
) => {
  const { query } = req;
  const data = await fetch(query.user as string);
  res.status(200).json(data);
};

export default handler;
