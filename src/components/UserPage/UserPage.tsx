import { useLocation } from "react-router-dom";
import useUserPage from "./hooks/useUserPage";
import NotFound from "./NotFound/NotFound";
import Profile from "./Profile/Profile";
import Record from "./Record/Record";
import * as S from "./UserPage.style";

const UserPage = () => {
  const nickname = decodeURI(useLocation().pathname).split("/")[2];
  const { data } = useUserPage(nickname);

  return (
    <S.UserPage>
      {data ? (
        <>
          <Profile user={data} />
          <Record user={data} />
        </>
      ) : (
        <NotFound />
      )}
    </S.UserPage>
  );
};

export default UserPage;
