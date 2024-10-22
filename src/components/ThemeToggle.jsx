import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`rounded transition-colors duration-300 ease-in-out transform active:scale-95 p-2
                  focus:outline-none 
                  ${theme === 'light' ? 'bg-gray-100 hover:bg-gray-300 active:bg-gray-400' : 'bg-gray-900 hover:bg-gray-600 active:bg-gray-800'}`}
      aria-label="Toggle theme"
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
};

export default ThemeToggle;
