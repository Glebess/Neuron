import styles from "../Kanban.module.css";
import type { KanbanColumnProps } from "../types";
import { KanbanCard } from "./KanbanCard";

export const KanbanColumn = ({
  title,
  tasks,
  onMoveStatus,
  onOpenSettings,
}: KanbanColumnProps) => {
  return (
    <div className={styles.kanbanColumn}>
      <h3>{title}</h3>
      <div className={styles.cardsList}>
        {tasks.length === 0 ? (
          <div className={styles.kanbanEmpty}>Пока пусто</div>
        ) : (
          tasks.map((task) => (
            <KanbanCard
              key={task.id}
              task={task}
              onMoveStatus={onMoveStatus}
              onOpenSettings={onOpenSettings}
            />
          ))
        )}
      </div>
    </div>
  );
};
