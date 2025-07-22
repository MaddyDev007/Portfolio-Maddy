import React from "react";
import {Sun , Moon} from "lucide-react";
import { useTheme } from "next-themes";
import {gsap } from "gsap";


const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    gsap.to(document.documentElement, {
      duration: 0.3,
      backgroundColor: newTheme === "dark" ? "#000" : "#fff",
      color: newTheme === "dark" ? "#fff" : "#000",
      onComplete: () => setTheme(newTheme),
    });
  };

  return (
    <button onClick={toggleTheme} className="p-3 bg-white/80 dark:bg-white/10 backdrop-blur-lg rounded-full text-black/70 dark:text-white/70 hover:text-black border border-black/20 dark:border-white/20 dark:hover:text-white hover:bg-white/20 transition-colors duration-300">
      {theme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
    </button>
  );
}

export default ThemeToggle;