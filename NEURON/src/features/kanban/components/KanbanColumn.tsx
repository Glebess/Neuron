import styles from "../Kanban.module.css";
import type { Task, ColumnStatus } from "../types";
import { KanbanCard } from "./KanbanCard";

interface KanbanColumnProps {
  title: string;
  status: ColumnStatus;
  tasks: Task[];
  onMoveStatus: (id: string, newStatus: Task["status"]) => void;
}

export const KanbanColumn = ({
  title,
  tasks,
  onMoveStatus,
}: KanbanColumnProps) => {
  return (
    <div className={styles.kanbanColumn}>
      <h3>{title}</h3>
      <div className={styles.cardsList}>
        {tasks.length === 0 ? (
          <div className={styles.kanbanEmpty}>Пока пусто</div>
        ) : (
          tasks.map((task) => (
            <KanbanCard key={task.id} task={task} onMoveStatus={onMoveStatus} />
          ))
        )}
      </div>
    </div>
  );
};
