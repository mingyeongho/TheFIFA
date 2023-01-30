import axios from "axios";
import { lazy, useEffect, useState } from "react";
import { API_KEY, API_URL } from "../../../utils/constant";
import { ProfileProps } from "../../../utils/interface";
import { DivisionType } from "../../../utils/type";
import * as S from "./Profile.style";
import profile from "../../../assets/profile.png";

const Division = lazy(() => import("./Division/Division"));

const Profile = ({ user }: ProfileProps) => {
  const { nickname, level, accessId } = user;
  const [maxDivisions, setMaxDivisions] = useState<DivisionType[]>();

  useEffect(() => {
    (async () => {
      const res = await axios.get(API_URL.getMaxDivision(accessId), {
        headers: { Authorization: API_KEY },
      });
      if (res.status === 200) {
        setMaxDivisions(res.data);
      }
    })();
  }, []);

  return (
    <S.ProfileContainer>
      <S.Profile>
        <S.ThumbnailContainer>
          <S.Thumbnail src={profile} />
        </S.ThumbnailContainer>
        <S.NameContainer>
          <S.DivisionContainer>
            {maxDivisions?.map((division, idx) => (
              <Division key={idx} {...division} />
            ))}
          </S.DivisionContainer>
          <S.Level children={`Lv.${level}`} />
          <S.Nickname children={nickname} />
        </S.NameContainer>
      </S.Profile>
    </S.ProfileContainer>
  );
};

export default Profile;
