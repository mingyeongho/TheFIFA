import { FormEvent } from "react";
import * as S from "./Search.style";
import { SearchProps } from "../../../utils/interface";
import getUser from "./apis/getUser";

const Search = ({ label, name, value, placeholder, onChange }: SearchProps) => {
  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const res = await getUser({ nickname: value });
    console.log(res.data);
  };

  return (
    <S.Search onSubmit={onSubmit}>
      <S.Label children={label} htmlFor={name} />
      <S.InputContainer>
        <S.Input
          id={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        <S.Button type="submit" children="검색" />
      </S.InputContainer>
    </S.Search>
  );
};

export default Search;
