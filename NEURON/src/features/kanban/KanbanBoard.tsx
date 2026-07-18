import { useState } from "react";
import type { FormEvent } from "react";
import styles from "./Kanban.module.css";
import type { Task } from "./types";
import { KanbanColumn } from "./components/KanbanColumn";

export const KanbanBoard = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "1",
      title: "Изучить бэкенд",
      description: "Разведать Express и Prisma для проекта",
      status: "todo",
    },
    {
      id: "2",
      title: "Разметка Neuron",
      description: "Сделать каркас и доску на чистом CSS",
      status: "in-progress",
    },
  ]);

  const [title, setTitle] = useState("");
  // Стейт для отображения скрытого бэклога "Позже"
  const [showLater, setShowLater] = useState(false);

  const handleAddTask = (e: FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newTask: Task = {
      id: crypto.randomUUID(),
      title: title.trim(),
      description: "",
      status: "todo",
    };

    setTasks((prev) => [...prev, newTask]);
    setTitle("");
  };

  const moveToStatus = (id: string, newStatus: Task["status"]) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, status: newStatus } : task,
      ),
    );
  };

  const laterTasks = tasks.filter((t) => t.status === "later");

  return (
    <div className={styles.kanbanContainer}>
      <header className={styles.kanbanHeader}>
        <div className={styles.headerLeft}>
          <h2>Доска задач</h2>
          {/* Кнопка-переключатель для бэклога */}
          <button
            className={styles.laterToggleBtn}
            onClick={() => setShowLater(!showLater)}
          >
            Отложенные ({laterTasks.length})
          </button>
        </div>

        <form onSubmit={handleAddTask} className={styles.kanbanForm}>
          <input
            type="text"
            placeholder="Новая задача..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <button type="submit" className={styles.submitBtn}>
            Добавить
          </button>
        </form>
      </header>

      {/* Выпадающая панель для задач "Позже" */}
      {showLater && (
        <div className={styles.laterPanel}>
          <h3>Сделать позже</h3>
          {laterTasks.length === 0 ? (
            <p className={styles.emptyText}>Нет отложенных задач</p>
          ) : (
            <div className={styles.laterList}>
              {laterTasks.map((task) => (
                <div key={task.id} className={styles.laterItem}>
                  <span>{task.title}</span>
                  <button onClick={() => moveToStatus(task.id, "todo")}>
                    В план
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Сетка теперь строго из 3 колонок — адаптируется на 100% ширины */}
      <div className={styles.kanbanGrid}>
        <KanbanColumn
          title="Нужно сделать"
          status="todo"
          tasks={tasks.filter((t) => t.status === "todo")}
          onMoveStatus={moveToStatus}
        />
        <KanbanColumn
          title="В работе"
          status="in-progress"
          tasks={tasks.filter((t) => t.status === "in-progress")}
          onMoveStatus={moveToStatus}
        />
        <KanbanColumn
          title="Готово"
          status="done"
          tasks={tasks.filter((t) => t.status === "done")}
          onMoveStatus={moveToStatus}
        />
      </div>
    </div>
  );
};
