import styles from "../../styles/Trade/_trade.module.scss";
import { TradeProps } from "../../utils/types/interface";

const Trade = ({ item, subcategory }: TradeProps) => {
  const { grade, saleSn, spid, tradeDate, value } = item;
  return <div className={styles.trade_wrapper}>Trade</div>;
};

export default Trade;
