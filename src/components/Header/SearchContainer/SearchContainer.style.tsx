import styled, { keyframes } from "styled-components";

const slide_in_blurred_top = keyframes`
     0% {
      -webkit-transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
              transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
      -webkit-transform-origin: 50% 0%;
              transform-origin: 50% 0%;
      -webkit-filter: blur(40px);
              filter: blur(40px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0) scaleY(1) scaleX(1);
              transform: translateY(0) scaleY(1) scaleX(1);
      -webkit-transform-origin: 50% 50%;
              transform-origin: 50% 50%;
      -webkit-filter: blur(0);
              filter: blur(0);
      opacity: 1;
      background-color: #3e3e4c;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
`;

export const SearchContainer = styled.div`
  position: relative;
`;

export const SearchForm = styled.form`
  display: flex;
  background-color: white;
  border-radius: 4px;
  overflow: hidden;
`;

export const Input = styled.input`
  border: none;
  padding: 8px;
  outline: none;
`;

export const Button = styled.button`
  border: none;
  background-color: inherit;
  cursor: pointer;
  padding: 8px;
`;

export const Popover = styled.div`
  display: none;
  color: black;
  position: absolute;
  top: 38px;
  left: 0;
  height: 200px;
  width: 100%;
  border-radius: 10px;
  background-color: inherit;
  animation: ${slide_in_blurred_top} 0.4s cubic-bezier(0.23, 1, 0.32, 1) both;
  z-index: 1000;
  padding: 12px;
  flex-direction: column;
  gap: 12px;
`;

export const SavedUser = styled.div`
  color: white;
  display: flex;
  justify-content: space-between;

  a {
    flex: 1;
  }
`;

export const XButton = styled.button`
  border: none;
  outline: none;
  background-color: inherit;
  color: white;
  cursor: pointer;
`;
