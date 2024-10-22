import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const { theme } = useTheme();

  return (
    <header className={`flex justify-between items-center p-4 shadow-md transition-colors duration-300 ease-in-out z-20 ${theme === 'light' ? 'bg-white' : 'bg-gray-900'}`}>
      <Link to="/" className="flex items-center">
        {/* <img
          src="/path/to/your/logo.png" // Replace with your logo path
          alt="TypoRush Logo"
          className="h-8 w-8 mr-2"
        /> */}
        <h1 className={`text-2xl font-bold transition-colors duration-300 ease-in-out ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>
          TypoRush
        </h1>
      </Link>
      <ThemeToggle />
    </header>
  );
};

export default Header;
