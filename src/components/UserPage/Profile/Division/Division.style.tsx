import styled from "styled-components";

export const Division = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 4px;
  background-color: white;

  @media ${(props) => props.theme.mobile} {
    border-radius: 6px;
    padding: 2px;
    font-size: 0.7rem;
  }

  @media ${(props) => props.theme.tablet} {
    border-radius: 6px;
    padding: 3px;
    font-size: 1rem;
  }
`;
