export interface Task {
  id: string;
  title: string;
  description: string;
  status: "later" | "todo" | "in-progress" | "done" | "archived";
}

export type ColumnStatus = "later" | "todo" | "in-progress" | "done";

export interface KanbanCardProps {
  task: Task;
  onMoveStatus: (id: string, newStatus: Task["status"]) => void;
}
