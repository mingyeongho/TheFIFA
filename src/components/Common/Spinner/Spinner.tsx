import styled, { keyframes } from "styled-components";

const rotation = keyframes`
 0% {
      transform: rotate(0deg);
  }
  100% {
      transform: rotate(360deg);
  }
`;

const S_Spinner = styled.span`
  width: 48px;
  height: 48px;
  border: 5px solid #fff;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: ${rotation} 1s linear infinite;
`;

const Spinner = () => {
  return <S_Spinner />;
};

export default Spinner;
