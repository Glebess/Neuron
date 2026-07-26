import { useState, type FormEvent } from "react";
import styles from "./Kanban.module.css";
import type { Task } from "./types";
import { KanbanColumn } from "./components/KanbanColumn";
import SettingsModal from "./components/SettingsModal";

export const KanbanBoard = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "1",
      title: "Изучить бэкенд",
      description: "Сделать каркас и доску на чистом CSS",
      status: "todo",
    },
    {
      id: "2",
      title: "Разметка Neuron",
      description: "Сделать каркас и доску на чистом CSS",
      status: "in-progress",
    },
  ]);

  const [activeTaskForModal, setActiveTaskForModal] = useState<Task | null>(
    null,
  );

  const [title, setTitle] = useState("");
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

      <div className={styles.kanbanGrid}>
        <KanbanColumn
          title="Нужно сделать"
          status="todo"
          tasks={tasks.filter((t) => t.status === "todo")}
          onMoveStatus={moveToStatus}
          onOpenSettings={(task) => setActiveTaskForModal(task)}
        />
        <KanbanColumn
          title="В работе"
          status="in-progress"
          tasks={tasks.filter((t) => t.status === "in-progress")}
          onMoveStatus={moveToStatus}
          onOpenSettings={(task) => setActiveTaskForModal(task)}
        />
        <KanbanColumn
          title="Готово"
          status="done"
          tasks={tasks.filter((t) => t.status === "done")}
          onMoveStatus={moveToStatus}
          onOpenSettings={(task) => setActiveTaskForModal(task)}
        />
      </div>

      {/* Модалка открывается по клику, передаем только задачу и закрытие */}
      {activeTaskForModal && (
        <SettingsModal
          task={activeTaskForModal}
          onClose={() => setActiveTaskForModal(null)}
        />
      )}
    </div>
  );
};
