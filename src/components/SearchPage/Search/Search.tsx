import * as S from "./Search.style";
import useSearch from "./hooks/useSearch";

const Search = () => {
  const { nicknameInputProps, onSearchUser } = useSearch();
  const { name, label, value, placeholder, onChange } = nicknameInputProps;

  return (
    <S.Search onSubmit={onSearchUser}>
      <S.Label children={label} htmlFor={name} />
      <S.InputContainer>
        <S.Input
          id={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          autoComplete="off"
        />
        <S.Button type="submit" children="검색" />
      </S.InputContainer>
    </S.Search>
  );
};

export default Search;
