import styles from "./KanbanCard.module.css";
import type { KanbanCardProps } from "../../types";
import { Settings } from "lucide-react";

export const KanbanCard = ({
  task,
  onOpenSettings,
  onMoveStatus,
}: KanbanCardProps) => {
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

        <div className={styles.action_container}>
          <button
            className={styles.settingsBtn}
            title="Настройки задачи"
            onClick={() => onOpenSettings(task)}
          >
            <Settings size={20} />
          </button>

          {/* {task.status === "done" && (
            <button
              className={styles.settingsBtn}
              title="Вернуть задачу в работу"
              onClick={() => onMoveStatus(task.id, "in-progress")}
            >
              <Undo2 size={20} />
            </button>
          )}
          {task.status === "in-progress" && (
            <button
              className={styles.settingsBtn}
              title="Пометить задачу как выполненную"
              onClick={() => onMoveStatus(task.id, "done")}
            >
              <Check size={20} />
            </button>
          )}
          {task.status === "todo" && (
            <button
              className={styles.settingsBtn}
              title="Переместить задачу в работу"
              onClick={() => onMoveStatus(task.id, "in-progress")}
            >
              <Play size={20} />
            </button>
          )} */}
        </div>
      </div>
    </div>
  );
};
