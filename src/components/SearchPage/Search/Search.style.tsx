import styled from "styled-components";

export const Search = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Label = styled.label`
  font-size: 2rem;
  font-weight: bolder;
  color: white;
`;

export const InputContainer = styled.div`
  border: 2px solid black;
  border-radius: 30px;
  overflow: hidden;
  display: flex;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  letter-spacing: 1px;
  padding: 12px 20px;
  font-size: 1.25rem;
  min-width: 400px;
`;

export const Button = styled.button`
  border: none;
  outline: none;
  background-color: black;
  color: white;
  letter-spacing: 1px;
  font-size: 1.25rem;
  height: 100%;
  padding: 12px;
  cursor: pointer;
`;

export const SavedUserContainer = styled.div`
  /* width: 100%; */
  height: 200px;
  background-color: black;
  opacity: 0.4;
  border-radius: 10px;
  overflow: scroll;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const SavedUser = styled.div`
  color: white;
  display: flex;
  justify-content: space-between;
`;

export const XButton = styled.button`
  border: none;
  outline: none;
  background-color: inherit;
  color: white;
  cursor: pointer;
`;
