export interface Task {
  id: string;
  title: string;
  description: string;
  status: "later" | "todo" | "in-progress" | "done" | "archived";
}

export interface KanbanColumnProps {
  title: string;
  status: "later" | "todo" | "in-progress" | "done";
  tasks: Task[];
  onMoveStatus: (id: string, newStatus: Task["status"]) => void;
  onOpenSettings: (task: Task) => void;
}

export interface KanbanCardProps {
  task: Task;
  onMoveStatus: (id: string, newStatus: Task["status"]) => void;
  onOpenSettings: (task: Task) => void;
}
export interface SettingsModalProps {
  task: Task;
  onClose: () => void;
}
