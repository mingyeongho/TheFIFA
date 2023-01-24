import Profile from "./Profile/Profile";
import Record from "./Record/Record";
import * as S from "./UserPage.style";

const UserPage = () => {
  return (
    <S.UserPage>
      <Profile />
      <Record />
    </S.UserPage>
  );
};

export default UserPage;
