import { useState } from "react";
import styles from "./Kanban.module.css";
import type { Task } from "./types";
import { KanbanColumn } from "./components/KanbanColumn";
import SettingsModal from "./components/SettingsModal";
import KanbanHeader from "./components/kanbanHeader/KanbanHeader";

export const KanbanBoard = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "1",
      title: "Изучить бэкенд",
      description: "Сделать каркас и доску на чистом CSS",
      status: "todo",

      tags: [
        { id: "t1", name: "test", color: "#ef4444" },
        { id: "t2", name: "test1", color: "#3b82f6" },
      ],
    },
    {
      id: "2",
      title: "Разметка Neuron",
      description: "Сделать каркас и доску на чистом CSS",
      status: "in-progress",
      tags: [
        { id: "t3", name: "test2", color: "#10b981" },
        { id: "t4", name: "test3", color: "#f59e0b" },
      ],
    },
  ]);

  const [activeTaskForModal, setActiveTaskForModal] = useState<Task | null>(
    null,
  );

  const moveToStatus = (id: string, newStatus: Task["status"]) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, status: newStatus } : task,
      ),
    );
  };

  return (
    <div className={styles.kanbanContainer}>
      <KanbanHeader tasks={tasks} />

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

      {activeTaskForModal && (
        <SettingsModal
          task={activeTaskForModal}
          onClose={() => setActiveTaskForModal(null)}
        />
      )}
    </div>
  );
};
