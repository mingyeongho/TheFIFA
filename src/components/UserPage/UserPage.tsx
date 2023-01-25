import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { API_KEY, API_URL } from "../../utils/constant";
import { User } from "../../utils/type";
import NotFound from "./NotFound/NotFound";
import Profile from "./Profile/Profile";
import Record from "./Record/Record";
import * as S from "./UserPage.style";

const UserPage = () => {
  const nickname = decodeURI(useLocation().pathname).split("/")[2];
  const [user, setUser] = useState<undefined | User>();

  useEffect(() => {
    (async () => {
      const res = await axios.get(API_URL.getUser(nickname), {
        headers: { Authorization: API_KEY },
      });
      if (res.status === 200) {
        setUser(res.data);
      }
    })();
  }, [nickname]);

  return (
    <S.UserPage>
      {user ? (
        <>
          <Profile user={user} />
          <Record user={user} />
        </>
      ) : (
        <NotFound />
      )}
    </S.UserPage>
  );
};

export default UserPage;
