import React from 'react';
import { useTheme } from '../context/ThemeContext'; // Importing the ThemeContext

const Button = ({ text, variant = 'solid' }) => {
  const { theme } = useTheme(); // Accessing the theme from context

  const baseStyles = "w-full px-4 py-2 rounded transition duration-300"; // Base styles for buttons

  // Define theme colors
  const colors = {
    light: {
      solid: { bg: 'bg-slate-900', text: 'text-white', hover: 'hover:bg-slate-800' },
      outline: { border: 'border border-slate-900', text: 'text-slate-900', hover: 'hover:bg-slate-900 hover:text-white' }
    },
    dark: {
      solid: { bg: 'bg-slate-900', text: 'text-white', hover: 'hover:bg-slate-800' },
      outline: { border: 'border border-slate-900', text: 'text-slate-900', hover: 'hover:bg-slate-900 hover:text-white' }
    }
  };

  const buttonStyles = variant === 'solid' 
    ? `${colors[theme].solid.bg} ${colors[theme].solid.text} ${colors[theme].solid.hover}` 
    : `${colors[theme].outline.border} ${colors[theme].outline.text} ${colors[theme].outline.hover}`;

  return (
    <button className={`${baseStyles} ${buttonStyles}`}>
      {text}
    </button>
  );
};

export default Button;
