import timeDiff from "../../../../../function/timeDiff";
import { TradeItemProps } from "../../../../../utils/interface";
import useTradeItem from "./hooks/useTradeItem";
import * as S from "./TradeItem.style";
import priceImg from "../../../../../assets/player_bar.png";

const TradeItem = ({ tradeItem, type }: TradeItemProps) => {
  const {
    tradeDate,
    PaletteResult,
    desc,
    grade,
    value,
    faceonUrl,
    daegalUrl,
    name,
    seasonCard,
    seasonImg,
    className,
  } = useTradeItem(tradeItem, type);

  return (
    <S.TradeItem>
      <S.TradeResult style={{ backgroundColor: PaletteResult.accent }} />
      <S.TradeContent style={{ backgroundColor: PaletteResult.bg }}>
        <S.TradeSummary>
          <S.TradeType
            style={{ color: PaletteResult.accent }}
            children={desc}
          />
          <S.TimeDiff children={timeDiff(tradeDate)} />
        </S.TradeSummary>
        <S.PlayerInfo>
          <S.Info>
            <S.Back>
              <S.BackImg src={seasonCard} alt={className} />
            </S.Back>
            <S.Faceon
              src={faceonUrl}
              alt={name}
              onError={({ currentTarget }) => {
                currentTarget.src = daegalUrl;
              }}
            />
            <S.SeasonImg src={seasonImg} alt={className} />
            <S.Grade grade={grade} children={grade} />
            <S.NameWrap>
              <S.Name children={name} />
            </S.NameWrap>
          </S.Info>
          <S.PriceWrap>
            <S.PriceImg src={priceImg} alt="priceImg" />
            <S.Price children={`${value.toLocaleString()} BP`} />
          </S.PriceWrap>
        </S.PlayerInfo>
      </S.TradeContent>
    </S.TradeItem>
  );
};

export default TradeItem;
