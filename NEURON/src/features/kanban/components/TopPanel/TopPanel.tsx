import styles from "./TopPanel.module.css";
import { Tags, Pause } from "lucide-react";
const TopPanel = () => {
  return (
    <div className={styles.topPanel}>
      <div className={styles.action}>
        <Tags size={18} />
        <button>Теги</button>
      </div>
      <div className={styles.action}>
        <Pause size={18} />
        <button>Отложенные задачи</button>
      </div>
      <div className={styles.action}>
        <Tags size={18} />
        <button>Теги</button>
      </div>
    </div>
  );
};
export default TopPanel;
