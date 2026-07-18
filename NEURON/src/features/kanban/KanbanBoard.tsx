import styles from "./Kanban.module.css";

export const KanbanBoard = () => {
  return (
    <div className={styles.kanbanContainer}>
      <header className={styles.kanbanHeader}>
        <h2>Доска задач</h2>
        <form className={styles.kanbanForm}>
          <input type="text" placeholder="Новая задача..." />
          <button type="submit">Добавить</button>
        </form>
      </header>

      <div className={styles.kanbanGrid}>
        <div className={styles.kanbanColumn}>
          <h3>Нужно сделать (1)</h3>
          <div className={styles.kanbanCard}>
            <h4>Изучить бэкенд</h4>
            <p>Разведать Express и Prisma для проекта</p>
          </div>
        </div>

        <div className={styles.kanbanColumn}>
          <h3>В работе (1)</h3>
          <div className={styles.kanbanCard}>
            <h4>Разметка Neuron</h4>
            <p>Сделать каркас и доску на чистом CSS</p>
          </div>
        </div>

        <div className={styles.kanbanColumn}>
          <h3>Готово (0)</h3>
          <div className={styles.kanbanEmpty}>Пока пусто</div>
        </div>
      </div>
    </div>
  );
};
