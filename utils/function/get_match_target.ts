import { MatchInfoDTO } from "../types/type";

const get_match_target = (MatchInfo: MatchInfoDTO[], accessId: string) => {
  const [home, away] = MatchInfo;
  return home.accessId === accessId ? home : away;
};

export default get_match_target;
