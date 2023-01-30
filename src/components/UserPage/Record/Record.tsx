import { lazy, Suspense } from "react";
import { useSearchParams } from "react-router-dom";
import { RecordProps } from "../../../utils/interface";
import Spinner from "../../Common/Spinner/Spinner";
import * as S from "./Record.style";

const Match = lazy(() => import("./Match/Match"));
const Trade = lazy(() => import("./Trade/Trade"));
const RecordNav = lazy(() => import("./RecordNav/RecordNav"));

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
