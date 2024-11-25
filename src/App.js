import './App.css';
import LoginForm from './components/Form/LoginForm';
import { ThemeProvider, useTheme } from './hooks/ThemeContext';

const ThemeToggler = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app-container ${theme}`}>
      <h1>{theme === 'light' ? 'Tema Claro' : 'Tema Escuro'}</h1>
      <button onClick={toggleTheme}>
        Alterar para {theme === 'light' ? 'Tema Escuro' : 'Tema Claro'}
      </button>
    </div>
  );
};


function App() {
  return (
    <ThemeProvider>
      <ThemeToggler />
      <LoginForm/>
    </ThemeProvider>
     
  );
}

export default App;
