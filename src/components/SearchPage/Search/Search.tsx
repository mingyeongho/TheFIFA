import React, { FormEvent, useEffect, useState } from "react";
import * as S from "./Search.style";
import { SearchProps } from "../../../utils/interface";
import { useNavigate } from "react-router-dom";
import Storage from "../../../utils/Storage";
import { SEARCHUSER } from "../../../utils/constant";
import { Link } from "react-router-dom";

const Search = ({ label, name, value, placeholder, onChange }: SearchProps) => {
  const naviagte = useNavigate();
  const getSavedUser = Storage.getStorage({ key: SEARCHUSER });
  const [savedUser, setSavedUser] = useState<string[] | null>(
    getSavedUser ? JSON.parse(getSavedUser) : null
  );

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    naviagte(`/user/${value}`);
  };

  const onRemove = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!savedUser) {
      return;
    }
    setSavedUser(savedUser.filter((user) => user !== e.currentTarget.id));
  };

  useEffect(() => {
    Storage.setStorage({ key: SEARCHUSER, value: JSON.stringify(savedUser) });
  }, [savedUser]);

  return (
    <S.Search onSubmit={onSubmit}>
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
      <S.SavedUserContainer>
        {savedUser &&
          savedUser.map((savedUser, idx) => (
            <S.SavedUser key={idx}>
              <Link to={`user/${savedUser}`}>
                <span>{savedUser}</span>
              </Link>
              <S.XButton
                children="X"
                onClick={onRemove}
                type="button"
                id={savedUser}
              />
            </S.SavedUser>
          ))}
      </S.SavedUserContainer>
    </S.Search>
  );
};

export default Search;
