import { Suspense } from "react";
import { SearchProps } from "../../utils/interface";
import Search from "../Common/Search/Search";
import ShadowBox from "../Common/ShadowBox/ShadowBox";
import useSearchpage from "./hooks/useSearchpage";
import * as S from "./SearchPage.style";

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
    <S.SearchPage>
      <ShadowBox children={<Search {...searchProps} />} />
    </S.SearchPage>
  );
};

export default SearchPage;
