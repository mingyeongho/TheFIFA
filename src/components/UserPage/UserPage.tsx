import { lazy } from "react";
import { useLocation } from "react-router-dom";
import useUserPage from "./hooks/useUserPage";
import * as S from "./UserPage.style";

const Profile = lazy(() => import("./Profile/Profile"));
const Record = lazy(() => import("./Record/Record"));
const NotFound = lazy(() => import("./NotFound/NotFound"));

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
