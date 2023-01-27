import { Link } from "react-router-dom";
import styled from "styled-components";

const S_Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  color: white;
  padding: 8px 20px;
`;

const S_Logo = styled.h1``;

const Header = () => {
  return (
    <S_Header>
      <Link to={"/"}>
        <S_Logo className="accent">TheFIFA</S_Logo>
      </Link>
    </S_Header>
  );
};

export default Header;
