import { DivisionType } from "../../../../utils/type";
import * as S from "./Division.style";
import useDivision from "./hooks/useDivision";

const Division = ({ matchType, division, achievementDate }: DivisionType) => {
  const { desc, rank } = useDivision({ matchType, division });
  return <S.Division children={`${desc}: ${rank}`}></S.Division>;
};

export default Division;
