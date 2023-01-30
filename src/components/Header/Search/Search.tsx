import { Link } from "react-router-dom";
import useSearch from "./hooks/useSearch";
import * as S from "./Search.style";

const SearchContainer = () => {
  const {
    nicknameInputProps,
    searchButtonProps,
    searchRecord,
    popoverRef,
    onRemove,
  } = useSearch();
  const { value, placeholder, ref, onChange, onFocus, onBlur } =
    nicknameInputProps;
  const { children, onSubmit } = searchButtonProps;

  return (
    <S.SearchContainer>
      <S.SearchForm>
        <S.Input
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          autoComplete="off"
          ref={ref}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        <S.Button type="submit" children={children} onClick={onSubmit} />
      </S.SearchForm>
      <S.Popover className="popover" ref={popoverRef}>
        {searchRecord &&
          searchRecord.map((user, idx) => (
            <S.SearchRecord key={idx}>
              <Link to={`user/${user}`}>
                <span>{user}</span>
              </Link>
              <S.XButton
                children="X"
                onClick={onRemove}
                type="button"
                id={user}
              />
            </S.SearchRecord>
          ))}
      </S.Popover>
    </S.SearchContainer>
  );
};

export default SearchContainer;
