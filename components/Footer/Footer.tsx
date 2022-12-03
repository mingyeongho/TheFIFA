import { NEXON } from "../../utils/constants/constants";
import styles from "../../styles/Footer/_footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <span>{NEXON}</span>
    </footer>
  );
};

export default Footer;
