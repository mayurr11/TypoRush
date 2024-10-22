import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Link = ({ to, children, className, ...props }) => {
  const { theme } = useTheme();

  // Define your theme colors
  const colors = {
    light: {
      text: 'text-slate-900',
      hover: 'hover:text-slate-800'
    },
    dark: {
      text: 'text-slate-300',
      hover: 'hover:text-slate-200'
    }
  };

  const baseStyle = `transition duration-300 ease-in-out font-bold ${colors[theme].text} ${colors[theme].hover}`;

  return (
    <RouterLink to={to} className={`${baseStyle} ${className}`} {...props}>
      {children}
    </RouterLink>
  );
};

export default Link;
