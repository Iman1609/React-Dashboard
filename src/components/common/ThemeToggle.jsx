import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext'; // Named import
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-300 text-text-light dark:text-text-dark hover:bg-accent/40 transition-theme"
    >
      {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

export default ThemeToggle;