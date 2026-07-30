import styles from "./KanbanCard.module.css";
import type { KanbanCardProps } from "../types";
import { Settings } from "lucide-react";

export const KanbanCard = ({ task, onOpenSettings }: KanbanCardProps) => {
  return (
    <div className={styles.kanbanCard}>
      <h4>{task.title}</h4>

      {task.description ? (
        <p className={styles.description}>{task.description}</p>
      ) : (
        <p className={styles.emptyDescription}>Описание отсутствует</p>
      )}

      <div className={styles.cardActions}>
        <div className={styles.tagsContainer}>
          {task.tags &&
            task.tags.map((tag) => (
              <span
                key={tag.id}
                className={styles.tag}
                style={{ backgroundColor: tag.color }}
              >
                {tag.name}
              </span>
            ))}
        </div>

        <button
          className={styles.settingsBtn}
          title="Настройки задачи"
          onClick={() => onOpenSettings(task)}
        >
          <Settings size={20} />
        </button>
      </div>
    </div>
  );
};
