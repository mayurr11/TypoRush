import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import Button from '../components/Button';

const Home = () => {
  const { theme } = useTheme();

  return (
    <div className={`flex flex-col items-center justify-center h-full `}>
      <h1 className="text-4xl font-bold mb-4 text-center">
        Welcome to TypoRush
      </h1>
      <p className="text-lg mb-6 text-center">
        Test your typing speed and improve your skills.
      </p>
      <div className="flex flex-col space-y-4 w-full max-w-xs">
        <Link to="/typing-test">
          <Button text="Start Typing Test" variant="solid" />
        </Link>
        <Link to="/results">
          <Button text="View Results" variant="outline" />
        </Link>
      </div>
    </div>
  );
};

export default Home;
