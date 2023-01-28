import { FormEvent } from "react";
import * as S from "./Search.style";
import { SearchProps } from "../../../utils/interface";
import { useNavigate } from "react-router-dom";

const Search = ({ label, name, value, placeholder, onChange }: SearchProps) => {
  const naviagte = useNavigate();

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    naviagte(`/user/${value}`);
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
