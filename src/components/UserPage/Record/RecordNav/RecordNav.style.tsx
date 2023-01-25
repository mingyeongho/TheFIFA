import styled from "styled-components";

export const RecordNav = styled.nav`
  display: flex;
  gap: 12px;

  a {
    padding: 8px;
    background-color: #555;
    color: white;
    outline: none;
    border: none;
    border-radius: 10px;
    font-size: 1.125rem;
    font-weight: bolder;

    &.focus {
      background-color: #b1b1b1;
    }
  }
`;
