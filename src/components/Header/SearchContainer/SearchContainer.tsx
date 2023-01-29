import { Link } from "react-router-dom";
import useSearchContainer from "./hooks/useSearchContainer";
import * as S from "./SearchContainer.style";

const SearchContainer = () => {
  const {
    nickname,
    onChange,
    onSubmit,
    inputRef,
    popoverRef,
    onFocus,
    onBlur,
    savedUser,
    onRemove,
  } = useSearchContainer();

  return (
    <S.SearchContainer>
      <S.SearchForm>
        <S.Input
          placeholder="구단주명"
          value={nickname}
          onChange={onChange}
          autoComplete="off"
          ref={inputRef}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        <S.Button type="submit" children="검색" onClick={onSubmit} />
      </S.SearchForm>
      <S.Popover className="popover" ref={popoverRef}>
        {savedUser &&
          savedUser.map((user, idx) => (
            <S.SavedUser key={idx}>
              <Link to={`user/${user}`}>
                <span>{user}</span>
              </Link>
              <S.XButton
                children="X"
                onClick={onRemove}
                type="button"
                id={user}
              />
            </S.SavedUser>
          ))}
      </S.Popover>
    </S.SearchContainer>
  );
};

export default SearchContainer;
