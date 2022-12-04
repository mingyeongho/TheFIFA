import axios from "axios";
import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useState } from "react";
import Panel from "../components/Reusable/Panel/Panel";
import styles from "../styles/pages/_index.module.scss";

export default function Home() {
  const router = useRouter();
  const [nickname, setNickname] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading((prev) => !prev);
    const data = await axios.get(`/api/get/user/${nickname}`);
    if (data.data !== null) {
      router.push(`/search_user/${data.data.nickname}`);
    } else {
      alert("존재하지 않는 구단주입니다.");
      setNickname("");
      setIsLoading((prev) => !prev);
    }
  };
  return (
    <div className={styles.home}>
      <Panel title="구단주 검색">
        {!isLoading ? (
          <form onSubmit={onSubmit} className={styles.search_user}>
            <input
              type="text"
              placeholder="구단주 검색"
              value={nickname}
              onChange={onChange}
            />
            <button type="submit">검색</button>
          </form>
        ) : (
          <div>Loading...</div>
        )}
      </Panel>
    </div>
  );
}
