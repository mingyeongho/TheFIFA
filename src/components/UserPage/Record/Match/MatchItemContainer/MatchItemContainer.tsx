import { MatchItemContainerProps } from "../../../../../utils/interface";
import useMatchItemContainer from "./hooks/useMatchItemContainer";
import MatchItem from "./MatchItem/MatchItem";
import * as S from "./MatchItemContainer.style";

const MatchItemContainer = ({ matchId, accessId }: MatchItemContainerProps) => {
  const { isLoading, data } = useMatchItemContainer(matchId);

  return (
    <S.MatchItemContainer>
      {isLoading ? (
        <S.Loading children={`Loading...`} />
      ) : (
        data &&
        data.matchInfo.length >= 2 && (
          <MatchItem matchItem={data} accessId={accessId} />
        )
      )}
    </S.MatchItemContainer>
  );
};

export default MatchItemContainer;
