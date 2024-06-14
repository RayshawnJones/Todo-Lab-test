import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext'; // Adjust the path as necessary

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      Toggle Theme
    </button>
  );
};

export default ThemeToggle;
