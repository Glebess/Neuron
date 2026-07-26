import { useState } from "react";
import styles from "./SettingsModal.module.css";
import type { SettingsModalProps, Task } from "../types";

const SettingsModal = ({ task, onClose }: SettingsModalProps) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description || "");
  const [status, setStatus] = useState<Task["status"]>(task.status);

  //   const handleSaveClick = () => {
  //     if (!title.trim()) return;
  //     onSave({
  //       ...task,
  //       title: title.trim(),
  //       description: description.trim(),
  //       status,
  //     });
  //   };

  return (
    <div className={styles.modalcontainer} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <h2>Редактирование задачи</h2>

        <div className={styles.modalForm}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Название задачи..."
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Описание задачи..."
          />
        </div>

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value as Task["status"])}
          className={styles.modalSelect}
        >
          <option value="later">Отложенные</option>
          <option value="todo">Нужно сделать</option>
          <option value="in-progress">В работе</option>
          <option value="done">Готово</option>
        </select>

        <div className={styles.modalActions}>
          <button className={styles.saveBtn}>Сохранить</button>
          <button onClick={onClose} className={styles.cancelBtn}>
            Отмена
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
