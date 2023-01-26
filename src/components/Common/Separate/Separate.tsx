import styled from "styled-components";

export const S_SeparateX = styled.div`
  height: 1px;
  background-color: #ddd;
`;

export const S_SeparateY = styled.div`
  width: 1px;
  background-color: #ddd;
`;

export const SeaprateX = ({ color }: { color?: string }) => {
  return <S_SeparateX style={{ backgroundColor: color }} />;
};

export const SeaprateY = ({ color }: { color?: string }) => {
  return <S_SeparateY style={{ backgroundColor: color }} />;
};
