import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../../styles/Profile/_profile.module.scss";
import get_rank_img from "../../utils/function/get_rank_img";
import { ProfileProps } from "../../utils/types/interface";
import { Nullable, Rank } from "../../utils/types/type";

const Profile = ({ user }: ProfileProps) => {
  const { accessId, nickname, level } = user;
  const [isLoading, setIsLoading] = useState(false);
  const [profile, setProfile] = useState<Nullable<Rank[]>>(null);

  useEffect(() => {
    const fetch = async () => {
      setIsLoading((prev) => !prev);
      if (accessId) {
        const data = await axios.get(`/api/get/rank/${accessId}`);
        if (data) {
          setProfile(data.data);
        }
      }
      setIsLoading((prev) => !prev);
    };
    fetch();
  }, [accessId]);

  const rank_img = (idx: number) => {
    if (profile) {
      const { src, alt } = get_rank_img(
        profile[idx].matchType,
        profile[idx].division
      );
      return <Image src={src} alt={alt} width={80} height={80} />;
    }
  };

  return (
    <div className={styles.profile_wrapper}>
      <div className={styles.rank}>
        <div className={styles.max_division}>
          <div className={styles.title}>공식경기 최고등급</div>
          <div className={styles.separation}></div>
          <div className={styles.image}>
            {!isLoading && profile ? rank_img(0) : <div>Loading...</div>}
          </div>
        </div>
        <div className={styles.max_division}>
          <div className={styles.title}>감독모드 최고등급</div>
          <div className={styles.separation}></div>
          <div className={styles.image}>
            {!isLoading ? rank_img(1) : <div>Loading...</div>}
          </div>
        </div>
      </div>
      <div className={styles.user}>
        <div className={styles.level}>Level: {level}</div>
        <div className={styles.separation}></div>
        <div
          className={`${styles.nickname} ${
            nickname.length > 6 ? styles.toolong : ""
          }`}
        >
          {nickname}
        </div>
      </div>
    </div>
  );
};

export default Profile;
