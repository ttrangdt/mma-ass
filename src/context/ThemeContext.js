import React, { createContext, useState, useEffect } from 'react';
import { useColorScheme } from 'react-native';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const systemColorScheme = useColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(systemColorScheme === 'dark');

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  const theme = {
    isDarkMode,
    colors: {
      background: isDarkMode ? '#121212' : '#F5F5F5',
      card: isDarkMode ? '#1E1E1E' : '#FFFFFF',
      text: isDarkMode ? '#FFFFFF' : '#000000',
      textSecondary: isDarkMode ? '#BBBBBB' : '#666666',
      primary: '#6200EE',
      border: isDarkMode ? '#333333' : '#E0E0E0',
      error: '#CF6679',
    },
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};
