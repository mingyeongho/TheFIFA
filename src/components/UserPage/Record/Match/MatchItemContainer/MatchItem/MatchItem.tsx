import getMatchType from "../../../../../../function/getMatchType";
import timeDiff from "../../../../../../function/timeDiff";
import { Palette } from "../../../../../../styles/Variable";
import { MatchItemProps } from "../../../../../../utils/interface";
import { SeaprateX } from "../../../../../Common/Separate/Separate";
import useMatchItem from "./hooks/useMatchItem";
import * as S from "./MatchItem.style";
import Player from "./Player/Player";

const MatchItem = ({ matchItem, accessId }: MatchItemProps) => {
  const { matchDate, matchType } = matchItem;
  const { player1_info, player2_info, getResult } = useMatchItem(
    matchItem,
    accessId
  );
  const PaletteResult = Palette[getResult().type];

  return (
    <S.MatchItem>
      <S.MatchResult
        style={{ backgroundColor: PaletteResult.accent }}
      ></S.MatchResult>
      <S.MatchSummary style={{ backgroundColor: PaletteResult.bg }}>
        <S.MatchTypeContainer>
          <S.MatchType
            style={{ color: PaletteResult.accent }}
            children={getMatchType(matchType)}
          />
          <S.TimeDiff children={timeDiff(matchDate)} />
        </S.MatchTypeContainer>
        <SeaprateX color={PaletteResult.separate} />
        <S.MatchDescContainer>
          <S.MatchDesc children={getResult().desc} />
        </S.MatchDescContainer>
      </S.MatchSummary>
      <S.MatchContent style={{ backgroundColor: PaletteResult.bg }}>
        <Player {...player1_info} />
        <Player {...player2_info} />
      </S.MatchContent>
    </S.MatchItem>
  );
};

export default MatchItem;
