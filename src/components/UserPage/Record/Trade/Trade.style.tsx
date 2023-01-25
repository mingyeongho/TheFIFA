import styled from "styled-components";

export const TradeContainer = styled.div``;

export const TradeNav = styled.nav`
  display: flex;
  gap: 4px;
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
