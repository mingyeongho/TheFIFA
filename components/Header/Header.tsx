import { LOGO } from "../../utils/constants/constants";
import styles from "../../styles/Header/_header.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";

const Header = () => {
  const router = useRouter();
  const { pathname } = router;
  const [nickname, setNickname] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const data = await axios.get(`/api/get/user/${nickname}`);
    if (data.data !== null) {
      router.push(`/search_user/${data.data.nickname}`);
      setNickname("");
    } else {
      alert("존재하지 않는 구단주입니다.");
      setNickname("");
    }
  };
  return (
    <header className={styles.header}>
      <Link href="/">
        <h1 className={styles.logo}>{LOGO}</h1>
      </Link>
      {pathname !== "/" && (
        <form onSubmit={onSubmit} className={styles.search_user}>
          <input
            type="text"
            placeholder="구단주 검색"
            value={nickname}
            onChange={onChange}
          />
          <button type="submit">검색</button>
        </form>
      )}
    </header>
  );
};

export default Header;
