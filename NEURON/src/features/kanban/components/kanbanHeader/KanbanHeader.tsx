import styles from "./kanbanHeader.module.css";
import { Tags, Pause, Search, Plus } from "lucide-react";
import type { KanbanHeaderProps } from "../../types";

const KanbanHeader = ({ tasks = [], onNewTask }: KanbanHeaderProps) => {
  const completedTasks = tasks.filter((t) => t.status === "done").length;
  const totalTasks = tasks.length;

  return (
    <header className={styles.kanbanHeader}>
      <div className={styles.taskDone}>
        <h3>
          Выполнено {completedTasks} из {totalTasks}
        </h3>
      </div>

      <div className={styles.action_container}>
        <button className={styles.action}>
          <Tags size={18} />
          Теги
        </button>

        <button className={styles.action}>
          <Pause size={18} />
          Отложенные
        </button>

        <button className={styles.action}>
          <Search size={18} />
          Поиск
        </button>
      </div>

      <button className={styles.newTaskBtn} onClick={onNewTask}>
        <Plus size={18} />
        Добавить задачу
      </button>
    </header>
  );
};

export default KanbanHeader;
