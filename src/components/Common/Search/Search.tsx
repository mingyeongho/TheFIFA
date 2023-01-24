import { FormEvent } from "react";
import * as S from "./Search.style";
import { SearchProps } from "../../../utils/interface";
import getUser from "./apis/getUser";
import { useNavigate } from "react-router-dom";

const Search = ({ label, name, value, placeholder, onChange }: SearchProps) => {
  const naviagte = useNavigate();

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const res = await getUser({ nickname: value });
    if (res.data) {
      const { nickname } = res.data;
      naviagte(`/user/${nickname}`);
    } else {
      alert("존재하지 않은 구단주입니다.");
    }
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
