import { MatchProps } from "../../../../utils/interface";
import jsonMatchType from "../../../../json/jsonMatchType.json";

import * as S from "./Match.style";
import { useState } from "react";

const Match = ({ accessId }: MatchProps) => {
  const [type, setType] = useState(50);

  return (
    <S.MatchContainer>
      <S.MatchNav>
        {jsonMatchType.map((mt, idx) => (
          <S.NavItem
            key={idx}
            className={type === mt.matchtype ? "focus" : undefined}
            onClick={() => setType(mt.matchtype)}
          >
            {mt.desc}
          </S.NavItem>
        ))}
      </S.MatchNav>
    </S.MatchContainer>
  );
};

export default Match;
