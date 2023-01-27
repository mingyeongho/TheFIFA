import { Palette } from "../../../../../../styles/Variable";
import { TradeDTO } from "../../../../../../utils/type";
import jsonSpid from "../../../../../../json/spid.json";
import jsonSeasonId from "../../../../../../json/seasonId.json";

const useTradeItem = (tradeItem: TradeDTO, type: "buy" | "sell") => {
  const { tradeDate, grade, value, spid } = tradeItem;
  const [seasonId, pid] = [
    spid.toString().substring(0, 3),
    spid.toString().substring(3),
  ];
  const PaletteResult = Palette[type];
  const desc = type === "buy" ? "구매" : "판매";

  const seasonInfo = jsonSeasonId.find(
    (season) => season.seasonId === parseInt(seasonId)
  )!;
  const { seasonCard, seasonImg, className } = seasonInfo;

  const faceonUrl = `https://fo4.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p${spid}.png`;
  const daegalUrl = `https://fo4.dn.nexoncdn.co.kr/live/externalAssets/common/players/p${pid}.png`;

  const { name } = jsonSpid.find((player) => player.id === spid)!;

  return {
    tradeDate,
    PaletteResult,
    desc,
    grade,
    value,
    faceonUrl,
    daegalUrl,
    name,
    seasonCard,
    seasonImg,
    className,
  };
};

export default useTradeItem;
