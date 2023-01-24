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
`;

export const Input = styled.input`
  border: none;
  outline: none;
  letter-spacing: 1px;
  padding: 12px;
  font-size: 1.25rem;
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
