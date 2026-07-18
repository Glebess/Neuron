import styles from "./KanbanCard.module.css";
import type { KanbanCardProps } from "../types";

export const KanbanCard = ({ task, onMoveStatus }: KanbanCardProps) => {
  return (
    <div className={styles.kanbanCard}>
      <h4>{task.title}</h4>
      {task.description && <p>{task.description}</p>}

      <div className={styles.cardActions}>
        {task.status === "todo" && (
          <button
            onClick={() => onMoveStatus(task.id, "later")}
            className={styles.skipBtn}
          >
            Позже
          </button>
        )}
        {task.status === "in-progress" && (
          <button
            onClick={() => onMoveStatus(task.id, "later")}
            className={styles.skipBtn}
          >
            Позже
          </button>
        )}

        {task.status === "later" && (
          <button
            onClick={() => onMoveStatus(task.id, "todo")}
            className={styles.actionBtn}
          >
            Нужно сделать
          </button>
        )}

        {task.status === "done" && (
          <button
            onClick={() => onMoveStatus(task.id, "archived")}
            className={styles.archiveBtn}
          >
            В архив
          </button>
        )}
      </div>
    </div>
  );
};
