import { useState } from "react";
import styles from "./SettingsModal.module.css";
import type { SettingsModalProps, Task } from "../../types";

const SettingsModal = ({ task, onClose, onSave }: SettingsModalProps) => {
  const [editedTask, setEditedTask] = useState<Task>({ ...task });

  const isNewTask = task.title === "";
  const handleSave = () => {
    onSave(editedTask);
  };
  const isTitleEmpty = editedTask.title.trim() === "";
  const showError = isTitleEmpty;
  return (
    <div className={styles.modalcontainer} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <h2>{isNewTask ? "Создание новой задачи" : "Редактирование задачи"}</h2>

        <div className={styles.modalForm}>
          <input
            type="text"
            value={editedTask.title}
            onChange={(e) =>
              setEditedTask({ ...editedTask, title: e.target.value })
            }
            placeholder="Название задачи..."
            required
            className={`${styles.inputTitle} ${showError ? styles.inputError : ""}`}
          />
          {showError && (
            <span className={styles.errorMessage}>
              Поле задачи не может быть пустым!
            </span>
          )}
          <textarea
            value={editedTask.description}
            onChange={(e) =>
              setEditedTask({ ...editedTask, description: e.target.value })
            }
            placeholder="Описание задачи... (необязательно)"
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
          <button
            onClick={handleSave}
            className={styles.saveBtn}
            disabled={editedTask.title.trim() === ""}
          >
            {isNewTask ? "Создать задачу" : "Сохранить"}
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
