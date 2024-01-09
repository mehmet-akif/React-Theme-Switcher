import React, { createContext, useState, useContext } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    primaryColor: 'blue',
    fontSize: '16px',
  });

  const updateTheme = (newTheme) => {
    console.log('Updating theme:', newTheme);
    setTheme((prevTheme) => ({
      ...prevTheme,
      ...newTheme,
    }));
  };

  const value = {
    theme,
    updateTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
