import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import useHeader from "./hooks/useHeader";

const S_Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  color: white;
  padding: 8px 20px;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 999;
`;

const S_Logo = styled.h1``;

const S_SearchContainer = styled.form`
  background-color: white;
  border-radius: 4px;
  overflow: hidden;
`;

const S_Input = styled.input`
  border: none;
  padding: 8px;
  outline: none;
`;

const S_Button = styled.button`
  border: none;
  background-color: inherit;
  cursor: pointer;
  padding: 8px;
`;

const Header = () => {
  const { pathname } = useLocation();
  const { nickname, onChange, onSubmit } = useHeader();

  return (
    <S_Header>
      <Link to={"/"}>
        <S_Logo className="accent">TheFIFA</S_Logo>
      </Link>
      {pathname.length > 1 && (
        <S_SearchContainer>
          <S_Input
            placeholder="구단주명"
            value={nickname}
            onChange={onChange}
          />
          <S_Button type="submit" children="검색" onClick={onSubmit} />
        </S_SearchContainer>
      )}
    </S_Header>
  );
};

export default Header;
