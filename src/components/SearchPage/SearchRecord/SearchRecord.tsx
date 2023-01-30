import { Link } from "react-router-dom";
import useSearchRecord from "./hooks/useSearchRecord";
import * as S from "./SearchRecord.style";

const SearchRecord = () => {
  const { searchRecord, onRemove } = useSearchRecord();

  return (
    <S.SearchRecordContainer>
      {searchRecord ? (
        searchRecord.map((item, idx) => (
          <S.SearchRecordItem key={idx}>
            <Link to={`/user/${item}`}>
              <S.User children={item} />
            </Link>
            <S.RemoveButton id={item} children="X" onClick={onRemove} />
          </S.SearchRecordItem>
        ))
      ) : (
        <div>검색 기록이 없습니다.</div>
      )}
    </S.SearchRecordContainer>
  );
};

export default SearchRecord;
