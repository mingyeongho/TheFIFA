import styled from "styled-components";

export const Player = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 0 8px 0;
  color: white;
`;

export const Controller = styled.span`
  font-size: 2rem;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${(props) => props.theme.mobile} {
    font-size: 1rem;
  }

  @media ${(props) => props.theme.tablet} {
    font-size: 1rem;
  }
`;

export const Nickname = styled.span`
  flex: 1;
  font-size: 1.25rem;
  font-weight: bolder;
  display: flex;
  justify-content: center;
  align-items: center;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  @media ${(props) => props.theme.mobile} {
    font-size: 1.2rem;
  }

  @media ${(props) => props.theme.tablet} {
    font-size: 1.2rem;
  }
`;

export const CardsAndGoal = styled.span`
  @media ${(props) => props.theme.mobile} {
    font-size: 0.8rem;
  }

  @media ${(props) => props.theme.tablet} {
    font-size: 0.9rem;
  }
`;
