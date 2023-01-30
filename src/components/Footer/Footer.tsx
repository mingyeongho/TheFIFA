import styled from "styled-components";
import { FOOTER } from "../../utils/constant";

const S_Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
  padding: 12px 20px;

  span {
    font-size: 1.5rem;
  }

  @media ${(props) => props.theme.mobile} {
    span {
      font-size: 1rem;
    }
  }

  @media ${(props) => props.theme.tablet} {
    span {
      font-size: 1rem;
    }
  }
`;

const Footer = () => {
  return (
    <S_Footer>
      <span>{FOOTER}</span>
    </S_Footer>
  );
};

export default Footer;
