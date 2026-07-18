import { useEffect, useState } from "react";
import { KanbanBoard } from "./features/kanban/KanbanBoard";
import { MainLayout } from "./features/layout/MainLayout";

function App() {
  const [isDark, setIsDark] = useState<boolean>(true);

  //логика слежения за обновлением темы (меняет класс у <html>)
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.remove("light-theme");
    } else {
      root.classList.add("light-theme");
    }
  }, [isDark]);
  const toggleTheme = () => setIsDark((prev) => !prev);
  return (
    <MainLayout isDark={isDark} onToggleTheme={toggleTheme}>
      <KanbanBoard />
    </MainLayout>
  );
}

export default App;
