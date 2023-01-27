import { MatchProps } from "../../../../utils/interface";
import jsonMatchType from "../../../../json/jsonMatchType.json";
import * as S from "./Match.style";
import { SeaprateX } from "../../../Common/Separate/Separate";
import useMatch from "./hooks/useMatch";
import MatchItemContainer from "./MatchItemContainer/MatchItemContainer";
import Spinner from "../../../Common/Spinner/Spinner";
import { Suspense } from "react";

const Match = ({ accessId }: MatchProps) => {
  const { type, setType, data } = useMatch(accessId);

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
      <SeaprateX />
      <S.MatchContent>
        {data &&
          data.data.map((matchId: string, idx: string) => (
            <Suspense fallback={<S.Loader children={<Spinner />} />} key={idx}>
              <MatchItemContainer matchId={matchId} accessId={accessId} />
            </Suspense>
          ))}
      </S.MatchContent>
    </S.MatchContainer>
  );
};

export default Match;
