import styled from "styled-components";

export const Search = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media ${(props) => props.theme.mobile} {
    gap: 6px;
  }

  @media ${(props) => props.theme.tablet} {
    gap: 8px;
  }
`;

export const Label = styled.label`
  font-size: 2rem;
  font-weight: bolder;
  color: white;

  @media ${(props) => props.theme.mobile} {
    font-size: 1.2rem;
  }

  @media ${(props) => props.theme.tablet} {
    font-size: 1.6rem;
  }
`;

export const InputContainer = styled.div`
  border: 2px solid black;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  letter-spacing: 1px;
  padding: 12px 20px;
  font-size: 1.25rem;
  width: 400px;

  @media ${(props) => props.theme.mobile} {
    width: 180px;
    padding: 6px 12px;
    font-size: 0.8rem;
  }

  @media ${(props) => props.theme.tablet} {
    width: 300px;
    padding: 6px 12px;
    font-size: 1.125rem;
  }
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

  @media ${(props) => props.theme.mobile} {
    font-size: 0.8rem;
    padding: 10px;
  }

  @media ${(props) => props.theme.tablet} {
    font-size: 1.125rem;
    padding: 10px;
  }
`;
