import styled from "styled-components";

export const SearchRecordContainer = styled.div`
  margin-top: 20px;
  height: 200px;
  background-color: black;
  opacity: 0.4;
  border-radius: 10px;
  overflow: scroll;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const SearchRecordItem = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const User = styled.span`
  flex: 1;
  color: white;
`;

export const RemoveButton = styled.button`
  border: none;
  outline: none;
  background-color: inherit;
  color: white;
  cursor: pointer;
`;
