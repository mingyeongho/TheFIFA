import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Match from "../../components/Match/Match";
import Profile from "../../components/Profile/Profile";
import Record from "../../components/Record/Record";
import Trade from "../../components/Trade/Trade";
import styles from "../../styles/pages/_nickname.module.scss";
import { Nullable, User } from "../../utils/types/type";

const Nickname = () => {
  const router = useRouter();
  const { nickname } = router.query;
  const [user, setUser] = useState<Nullable<User>>(null);

  useEffect(() => {
    const fetch = async () => {
      if (nickname as string) {
        const data = await axios.get(`/api/get/user/${nickname}`);
        if (data) {
          setUser({ ...data.data });
        }
      }
    };
    fetch();
  }, [nickname]);

  return (
    <div className={styles.user_page}>
      {user && (
        <>
          <Profile user={user} />
          <Record user={user} />
        </>
      )}
    </div>
  );
};

export default Nickname;
