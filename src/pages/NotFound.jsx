import React from 'react';
import { useTheme } from '../context/ThemeContext'; // Import useTheme to access theme context
import Link from '../components/Link'; // Adjust the path as necessary

const NotFound = () => {
  const { theme } = useTheme(); // Get the current theme

  return (
    <div className={`flex flex-col h-full ${theme === 'light' ? 'bg-white' : 'bg-gray-800'}`}>
      <main className="flex-grow flex items-center justify-center">
        <div className={`text-center ${theme === 'light' ? 'text-black' : 'text-white'}`}>
          <h1 className="text-6xl font-bold text-red-500">404</h1>
          <p className="text-xl">Page Not Found</p>
          <p className="mt-4">
            The page you are looking for doesn't exist. Go back to the{' '}
            <Link to="/">Home Page</Link>.
          </p>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
