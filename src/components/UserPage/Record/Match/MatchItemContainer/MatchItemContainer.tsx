import { Suspense } from "react";
import { MatchItemContainerProps } from "../../../../../utils/interface";
import Spinner from "../../../../Common/Spinner/Spinner";
import useMatchItemContainer from "./hooks/useMatchItemContainer";
import MatchItem from "./MatchItem/MatchItem";
import * as S from "./MatchItemContainer.style";

const MatchItemContainer = ({ matchId, accessId }: MatchItemContainerProps) => {
  const { data } = useMatchItemContainer(matchId);

  return (
    <>
      {data && data.matchInfo.length >= 2 && (
        <S.MatchItemContainer>
          <Suspense fallback={<Spinner />}>
            <MatchItem matchItem={data} accessId={accessId} />
          </Suspense>
        </S.MatchItemContainer>
      )}
    </>
  );
};

export default MatchItemContainer;
