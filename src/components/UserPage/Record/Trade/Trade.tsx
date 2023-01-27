import { Suspense } from "react";
import { TradeProps } from "../../../../utils/interface";
import { TradeDTO } from "../../../../utils/type";
import { SeaprateX } from "../../../Common/Separate/Separate";
import useTrade from "./hooks/useTrade";
import * as S from "./Trade.style";
import TradeItem from "./TradeItem/TradeItem";

const Navs: { desc: "판매" | "구매"; tradetype: "sell" | "buy" }[] = [
  {
    desc: "판매",
    tradetype: "sell",
  },
  {
    desc: "구매",
    tradetype: "buy",
  },
];

const Trade = ({ accessId }: TradeProps) => {
  const { type, setType, data } = useTrade(accessId);

  return (
    <S.TradeContainer>
      <S.TradeNav>
        {Navs.map((nav, idx) => (
          <S.NavItem
            key={idx}
            children={nav.desc}
            className={type === nav.tradetype ? "focus" : undefined}
            onClick={() => setType(nav.tradetype)}
          />
        ))}
      </S.TradeNav>
      <SeaprateX />
      <S.TradeContent>
        {data &&
          data.data.map((tradeItem: TradeDTO, idx: string) => (
            <TradeItem type={type} tradeItem={tradeItem} key={idx} />
          ))}
      </S.TradeContent>
    </S.TradeContainer>
  );
};

export default Trade;
