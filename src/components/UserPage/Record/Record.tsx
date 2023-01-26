import { useSearchParams } from "react-router-dom";
import { RecordProps } from "../../../utils/interface";
import { SeaprateX } from "../../Common/Separate/Separate";
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
          <Trade accessId={accessId} />
        )}
      </S.Record>
    </S.RecordContainer>
  );
};

export default Record;
