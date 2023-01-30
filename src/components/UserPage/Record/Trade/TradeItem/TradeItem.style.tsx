import styled from "styled-components";
import { GradePalette } from "../../../../../styles/Variable";

export const TradeItem = styled.div`
  border-radius: 6px;
  overflow: hidden;
  display: flex;
`;

export const TradeResult = styled.div`
  width: 10px;
`;

export const TradeContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 8px 8px 0 8px;

  @media ${(props) => props.theme.mobile} {
    padding: 4px 4px 4px 8px;
  }
`;

export const TradeSummary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  background-color: inherit;

  @media ${(props) => props.theme.mobile} {
    gap: 2px;
  }
`;

export const PlayerInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TradeType = styled.span`
  font-size: 0.875rem;
  font-weight: bolder;
`;

export const TimeDiff = styled.span`
  font-size: 12px;
  color: #9e9eb1;
`;

export const Info = styled.div`
  z-index: 3;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Back = styled.span``;

export const BackImg = styled.img`
  width: 140px;

  @media ${(props) => props.theme.mobile} {
    width: 80px;
  }
`;

export const Faceon = styled.img`
  position: absolute;
  top: 38px;
  right: 5px;

  @media ${(props) => props.theme.mobile} {
    top: 26px;
    right: 2px;
    width: 70px;
  }
`;

export const NameWrap = styled.div`
  position: absolute;
  bottom: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  gap: 4px;
  width: 100%;
  overflow: hidden;

  @media ${(props) => props.theme.mobile} {
    bottom: 20px;
  }
`;

export const Name = styled.span`
  font-weight: bolder;
  font-size: 0.8rem;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media ${(props) => props.theme.mobile} {
    font-size: 0.725rem;
  }
`;

export const SeasonImg = styled.img`
  width: 20px;
  position: absolute;
  bottom: 77px;
  left: 14px;

  @media ${(props) => props.theme.mobile} {
    width: 14px;
    bottom: 45px;
    left: 7px;
  }
`;

export const Grade = styled.span<{
  grade: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
}>`
  position: absolute;
  bottom: 62px;
  right: 3px;
  width: 42px;
  height: 21px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  font-family: "EASANS";
  color: ${(props) => GradePalette[props.grade].color};
  background: ${(props) => GradePalette[props.grade].background};
  border: ${(props) => GradePalette[props.grade].border};
  border-top-color: ${(props) => GradePalette[props.grade].borderTopColor};
  border-left-color: ${(props) => GradePalette[props.grade].borderLeftColor};
  border-right-color: ${(props) => GradePalette[props.grade].borderRightColor};

  @media ${(props) => props.theme.mobile} {
    bottom: 37px;
    right: 1px;
    width: 20px;
    height: 12px;
    font-size: 0.6rem;
  }
`;

export const PriceWrap = styled.div`
  position: relative;
`;

export const PriceImg = styled.img`
  position: relative;
  width: 150px;
  top: -10px;

  @media ${(props) => props.theme.mobile} {
    width: 90px;
  }
`;

export const Price = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70%;
  width: 100%;
  color: white;
  font-size: 0.85rem;

  @media ${(props) => props.theme.mobile} {
    font-size: 0.7rem;
    top: -4px;
  }
`;
