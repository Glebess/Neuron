import { useState } from "react";
import styles from "./SettingsModal.module.css";
import type { SettingsModalProps, Task } from "../../types";

const SettingsModal = ({
  task,
  title,
  onClose,
  onSave,
}: SettingsModalProps) => {
  // Оставляем только один стейт для всей задачи целиком
  const [editedTask, setEditedTask] = useState<Task>({ ...task });

  const isNewTask = task.title === "";
  const handleSave = () => {
    onSave(editedTask);
  };

  return (
    <div className={styles.modalcontainer} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <h2>{title}</h2>

        <div className={styles.modalForm}>
          <input
            type="text"
            value={editedTask.title}
            onChange={(e) =>
              setEditedTask({ ...editedTask, title: e.target.value })
            }
            placeholder="Название задачи..."
          />
          <textarea
            value={editedTask.description}
            onChange={(e) =>
              setEditedTask({ ...editedTask, description: e.target.value })
            }
            placeholder="Описание задачи..."
          />
        </div>

        <select
          value={editedTask.status}
          onChange={(e) =>
            setEditedTask({
              ...editedTask,
              status: e.target.value as Task["status"],
            })
          }
          className={styles.modalSelect}
        >
          <option value="later">Отложенные</option>
          <option value="todo">Нужно сделать</option>
          <option value="in-progress">В работе</option>
          <option value="done">Готово</option>
        </select>

        <div className={styles.modalActions}>
          <button onClick={handleSave} className={styles.saveBtn}>
            Сохранить
          </button>
          <button onClick={onClose} className={styles.cancelBtn}>
            Отмена
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
