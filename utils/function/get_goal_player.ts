import { ShootDetailDTO } from "../types/type";
import spidJson from "../json/spid.json";
import seasonIdJson from "../json/seasonId.json";

const get_goal_player = (shootPlayer: ShootDetailDTO[]) => {
  return shootPlayer.map((cur, idx) => {
    const { spId } = cur;
    const seasonid = spId.toString().substring(0, 3);
    const { name } = spidJson.find((el) => el.id === spId)!;
    const season = seasonIdJson
      .find((el) => el.seasonId === seasonid)!
      .className.split("(")[0]
      .trim();
    return {
      name,
      season,
    };
  });
};

export default get_goal_player;
