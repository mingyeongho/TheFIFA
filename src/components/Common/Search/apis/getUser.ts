import axios from "axios";
import { API_URL } from "../../../../utils/constant";

const getUser = async ({ nickname }: { nickname: string }) => {
  return await axios.get(API_URL.getUser(nickname), {
    headers: { Authorization: import.meta.env.VITE_API_KEY },
  });
};

export default getUser;
