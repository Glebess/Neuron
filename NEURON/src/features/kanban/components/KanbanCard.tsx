import styles from "./KanbanCard.module.css";
import type { KanbanCardProps } from "../types";
import { Settings } from "lucide-react";
export const KanbanCard = ({ task, onOpenSettings }: KanbanCardProps) => {
  return (
    <div className={styles.kanbanCard}>
      <h4>{task.title}</h4>
      {task.description ? (
        <p>{task.description}</p>
      ) : (
        <p>Описание отсутствует</p>
      )}

      <div className={styles.cardActions}>
        <button
          className={styles.settingsBtn}
          title="Настройки задачи"
          onClick={() => onOpenSettings(task)}
        >
          <Settings size={22} />
        </button>
      </div>
    </div>
  );
};
