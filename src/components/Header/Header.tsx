import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { LOGO } from "../../utils/constant";
import Search from "./Search/Search";

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

const Header = () => {
  const { pathname } = useLocation();

  return (
    <S_Header>
      <Link to={"/"}>
        <S_Logo className="accent">{LOGO}</S_Logo>
      </Link>
      {pathname.length > 1 && <Search />}
    </S_Header>
  );
};

export default Header;
