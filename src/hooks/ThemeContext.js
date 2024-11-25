import React, { createContext, useState, useContext } from 'react';

// Criando o contexto
const ThemeContext = createContext();

// Provider do contexto
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // Tema inicial é 'light'

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook personalizado para usar o contexto
export const useTheme = () => useContext(ThemeContext);
