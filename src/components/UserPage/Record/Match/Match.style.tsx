import styled from "styled-components";

export const MatchContainer = styled.div``;

export const MatchNav = styled.nav`
  display: flex;
  gap: 4px;
  padding: 10px 20px 20px 20px;
`;

export const NavItem = styled.button`
  cursor: pointer;
  padding: 6px;
  background-color: rgba(120, 120, 120, 0.5);
  color: white;
  border: none;
  outline: none;
  border-radius: 6px;

  &.focus {
    background-color: #b1b1b1;
  }
`;

export const MatchContent = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
`;

export const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 420px;
  height: 100px;
  border-radius: 6px;
  background-color: #4c4c56;
`;
