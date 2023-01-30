import Search from "./Search/Search";
import ShadowBox from "../Common/ShadowBox/ShadowBox";
import * as S from "./SearchPage.style";
import bg_img from "../../assets/bg_img.jpeg";
import SearchRecord from "./SearchRecord/SearchRecord";

const SearchPage = () => {
  return (
    <S.SearchPage style={{ backgroundImage: `url(${bg_img})` }}>
      <ShadowBox
        children={
          <>
            <Search />
            <SearchRecord />
          </>
        }
      />
    </S.SearchPage>
  );
};

export default SearchPage;
