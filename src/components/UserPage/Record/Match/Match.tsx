import { MatchProps } from "../../../../utils/interface";
import * as S from "./Match.style";

const Match = ({ accessId }: MatchProps) => {
  return (
    <S.MatchContainer>
      <S.MatchNav></S.MatchNav>
    </S.MatchContainer>
  );
};

export default Match;
