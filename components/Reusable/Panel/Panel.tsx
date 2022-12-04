import styles from "../../../styles/Reusable/Panel/_panel.module.scss";
import { PanelProps } from "../../../utils/types/interface";

const Panel = ({ title, children }: PanelProps) => {
  return (
    <div className={styles.panel}>
      <h3 className={styles.title}>{title}</h3>
      <div>{children}</div>
    </div>
  );
};

export default Panel;
