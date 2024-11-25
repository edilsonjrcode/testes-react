import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider, useTheme } from './ThemeContext';

const TestComponent = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <div data-testid="theme">{theme}</div>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </>
  );
};

describe('ThemeContext', () => {
  it('deve fornecer tema padrão como claro', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );
    expect(screen.getByTestId('theme').textContent).toBe('light');
  });

  it('deve alternar o tema entre claro e escuro', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    const button = screen.getByText('Toggle Theme');
    fireEvent.click(button);
    expect(screen.getByTestId('theme').textContent).toBe('dark');

    fireEvent.click(button);
    expect(screen.getByTestId('theme').textContent).toBe('light');
  });
});
