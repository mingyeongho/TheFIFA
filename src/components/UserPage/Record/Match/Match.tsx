import { MatchProps } from "../../../../utils/interface";
import jsonMatchType from "../../../../json/jsonMatchType.json";
import * as S from "./Match.style";
import { SeaprateX } from "../../../Common/Separate/Separate";
import useMatch from "./hooks/useMatch";
import MatchItemContainer from "./MatchItemContainer/MatchItemContainer";

const Match = ({ accessId }: MatchProps) => {
  const { type, setType, data, isLoading } = useMatch(accessId);

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
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          data &&
          data.data.map((matchId: string, idx: string) => (
            <MatchItemContainer
              key={idx}
              matchId={matchId}
              accessId={accessId}
            />
          ))
        )}
      </S.MatchContent>
    </S.MatchContainer>
  );
};

export default Match;
