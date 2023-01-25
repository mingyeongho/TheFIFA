import axios from "axios";
import { useState } from "react";
import { META_URL } from "../../../../../utils/constant";

const useDivision = ({
  matchType,
  division,
}: {
  matchType: number;
  division: number;
}) => {
  const [desc, setDesc] = useState<string>();
  const [rank, setRank] = useState<string>();

  const getDesc = async () => {
    const res = await axios.get(META_URL.matchType);
    const json: { matchtype: number; desc: string }[] = res.data;
    const d = json.find((type) => type.matchtype === matchType)!.desc;
    setDesc(d);
  };

  const getRank = async () => {
    const RankURL =
      matchType === 214 ? META_URL.divisionVolta : META_URL.divisionOffical;
    const res = await axios.get(RankURL);
    const json: { divisionId: number; divisionName: string }[] = res.data;
    const r = json.find((type) => type.divisionId === division)!.divisionName;
    setRank(r);
  };

  getDesc();
  getRank();
  return { desc, rank };
};

export default useDivision;
