import React from 'react';
import { useTheme } from '../context/ThemeContext';
import Link from './Link'; // Import your custom Link component

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className={`py-4 transition-colors duration-300 ease-in-out ${theme === 'light' ? 'bg-white text-gray-800' : 'bg-gray-900 text-white'}`}>
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} TypoRush. All rights reserved.
        </p>
        <p className="mt-2">
          Created by{' '}
          <Link
            to="https://www.mayurportfolio.tech"
          >
            Mayur Chauhan
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
