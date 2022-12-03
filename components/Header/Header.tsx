import { LOGO } from "../../utils/constants/constants";
import styles from "../../styles/Header/_header.module.scss";
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <h1 className={styles.logo}>{LOGO}</h1>
      </Link>
    </header>
  );
};

export default Header;
