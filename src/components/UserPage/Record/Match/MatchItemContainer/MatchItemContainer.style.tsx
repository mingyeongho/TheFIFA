import styled from "styled-components";

export const MatchItemContainer = styled.div`
  width: 420px;
  height: 100px;
  border-radius: 6px;
  overflow: hidden;
  display: flex;

  @media ${(props) => props.theme.mobile} {
    width: 300px;
  }

  @media ${(props) => props.theme.tablet} {
    width: 330px;
  }
`;
