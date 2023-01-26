import { useState } from "react";
import { TradeProps } from "../../../../utils/interface";
import { SeaprateX } from "../../../Common/Separate/Separate";
import * as S from "./Trade.style";

const Navs = [
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
  const [type, setType] = useState("sell");

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
    </S.TradeContainer>
  );
};

export default Trade;
