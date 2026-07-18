import React from "react";
import styles from "./MainLayout.module.css";
import { Sun, Moon } from "lucide-react"; // Импортируем иконки только для свитча

interface MainLayoutProps {
  children: React.ReactNode;
  isDark: boolean;
  onToggleTheme: () => void;
}

export const MainLayout = ({
  children,
  isDark,
  onToggleTheme,
}: MainLayoutProps) => {
  return (
    <div className={styles.layoutContainer}>
      <aside className={styles.sidebar}>
        <div className={styles.logo}>NEURON</div>

        <nav className={styles.menu}>
          <button className={`${styles.menuBtn} ${styles.active}`}>
            Доска
          </button>
          <button className={styles.menuBtn}>Таймер</button>
          <button className={styles.menuBtn}>Привычки</button>
        </nav>

        {/* Переключатель с иконкой внутри ползунка */}
        <div className={styles.themeToggleContainer}>
          <span className={styles.themeLabel}>
            {isDark ? "Темная тема" : "Светлая тема"}
          </span>

          <button
            className={`${styles.toggleTrack} ${!isDark ? styles.lightTrack : ""}`}
            onClick={onToggleTheme}
            aria-label="Переключатель темы"
          >
            <div className={styles.toggleThumb}>
              {isDark ? (
                <Moon size={12} className={styles.toggleIcon} />
              ) : (
                <Sun size={12} className={styles.toggleIcon} />
              )}
            </div>
          </button>
        </div>
      </aside>

      <main className={styles.mainContent}>{children}</main>
    </div>
  );
};
