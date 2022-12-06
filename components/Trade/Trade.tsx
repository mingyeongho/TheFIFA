import styles from "../../styles/Trade/_trade.module.scss";
import get_category_desc from "../../utils/function/get_category_desc";
import time_diff from "../../utils/function/time_diff";
import { TradeProps } from "../../utils/types/interface";
import seasonIdJson from "../../utils/json/seasonId.json";
import spidJson from "../../utils/json/spid.json";
import {
  API_URL_GET_PLAYER_IMG,
  API_URL_GET_PLAYER_NORMAL_IMG,
} from "../../utils/constants/constants";
import { useState } from "react";
import Image from "next/image";

const Trade = ({ item }: TradeProps) => {
  const { grade, saleSn, spid, tradeDate, value, type } = item;
  const category = get_category_desc(type);
  const seasonId = spid.toString().substring(0, 3);
  const pid = spid.toString().substring(3);
  const season = seasonIdJson.find(
    (el) => el.seasonId.toString() === seasonId
  )!;
  const action_faceon = API_URL_GET_PLAYER_IMG.replace(
    "{spid}",
    spid.toString()
  );
  const daegal_faceon = API_URL_GET_PLAYER_NORMAL_IMG.replace("{pid}", pid);
  const player_name = spidJson.find((el) => el.id === spid)!;
  const [playerImg, setPlayerImg] = useState(action_faceon);

  return (
    <div className={styles.trade}>
      <div
        className={`${styles.trade_type} ${
          type === "buy" ? styles.buy : styles.sell
        }`}
      >
        <div className={styles.type_result}>{category}</div>
        <div>{time_diff(tradeDate)}</div>
      </div>
      <div
        className={`${styles.trade_summary} ${
          type === "buy" ? styles.buy : styles.sell
        }`}
      >
        <div className={styles.img}>
          <Image
            src={playerImg}
            alt={player_name.name}
            fill
            placeholder="blur"
            blurDataURL={process.env.NEXT_PUBLIC_NOT_FOUND_PLAYER}
            onError={() => setPlayerImg(daegal_faceon)}
          />
        </div>
        <div className={styles.item_detail}>
          <div className={styles.player}>
            <div className={styles.season}>
              <Image
                src={season.seasonImg}
                alt={season.className}
                width={20}
                height={16}
              />
            </div>
            <div>{player_name.name}</div>
            <div>{grade}강</div>
          </div>
          <div className={styles.value}>{value.toLocaleString("kr")}원</div>
        </div>
      </div>
    </div>
  );
};

export default Trade;
