import { Suspense } from "react";
import { useSearchParams } from "react-router-dom";
import { RecordProps } from "../../../utils/interface";
import Spinner from "../../Common/Spinner/Spinner";
import Match from "./Match/Match";
import * as S from "./Record.style";
import RecordNav from "./RecordNav/RecordNav";
import Trade from "./Trade/Trade";

const Record = ({ user }: RecordProps) => {
  const { accessId } = user;
  const record = useSearchParams()[0].get("record");

  return (
    <S.RecordContainer>
      <S.Record>
        <RecordNav />
        {!record ? (
          <Match accessId={accessId} />
        ) : (
          <Suspense fallback={<S.Loader children={<Spinner />} />}>
            <Trade accessId={accessId} />
          </Suspense>
        )}
      </S.Record>
    </S.RecordContainer>
  );
};

export default Record;
