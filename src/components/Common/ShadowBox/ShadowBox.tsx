import styled from "styled-components";
import { ShadowBoxProps } from "../../../utils/interface";

const S_ShadowBox = styled.div`
  padding: 20px;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0)
  );
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
`;

const ShadowBox = ({ children }: ShadowBoxProps) => {
  return <S_ShadowBox children={children} />;
};

export default ShadowBox;
