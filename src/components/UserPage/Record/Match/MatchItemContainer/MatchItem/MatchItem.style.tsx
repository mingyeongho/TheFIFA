import styled from "styled-components";

export const MatchItem = styled.div`
  flex: 1;
  display: flex;
`;

export const MatchResult = styled.div`
  width: 10px;
`;

export const MatchSummary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 8px;
`;

export const MatchTypeContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const MatchType = styled.span`
  font-size: 0.875rem;
  font-weight: bolder;
`;

export const TimeDiff = styled.span`
  font-size: 12px;
  color: #9e9eb1;
`;

export const MatchDescContainer = styled.div`
  flex: 1;
`;

export const MatchDesc = styled.span`
  font-size: 0.875rem;
  font-weight: bolder;
  color: #9e9eb1;
`;

export const MatchContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
`;
