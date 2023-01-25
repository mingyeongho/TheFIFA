import styled from "styled-components";

export const S_SeparateX = styled.div`
  height: 1px;
  background-color: #ddd;
`;

export const S_SeparateY = styled.div`
  width: 1px;
  background-color: #ddd;
`;

export const SeaprateX = () => {
  return <S_SeparateX />;
};

export const SeaprateY = () => {
  return <S_SeparateY />;
};
