import { SearchProps } from "../../utils/interface";
import Search from "./Search/Search";
import ShadowBox from "../Common/ShadowBox/ShadowBox";
import useSearchpage from "./hooks/useSearchpage";
import * as S from "./SearchPage.style";
import bg_img from "../../assets/bg_img.jpeg";

const SearchPage = () => {
  const { name, onChange } = useSearchpage();

  const searchProps: SearchProps = {
    label: "구단주명",
    name: "name",
    value: name,
    placeholder: "구단주명을 입력하세요.",
    onChange,
  };
  return (
    <S.SearchPage style={{ backgroundImage: `url(${bg_img})` }}>
      <ShadowBox children={<Search {...searchProps} />} />
    </S.SearchPage>
  );
};

export default SearchPage;
