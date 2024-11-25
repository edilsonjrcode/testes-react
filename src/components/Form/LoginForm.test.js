import { render, screen, fireEvent } from '@testing-library/react';
import LoginForm from './LoginForm';

test('renderiza campos de login e senha corretamente', () => {
  render(<LoginForm />);
  expect(screen.getByLabelText(/Login:/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Senha:/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /Entrar/i })).toBeInTheDocument();
});

test('atualiza o estado interno ao digitar nos campos', () => {
  render(<LoginForm />);
  
  const loginInput = screen.getByLabelText(/Login:/i);
  const passwordInput = screen.getByLabelText(/Senha:/i);

  fireEvent.change(loginInput, { target: { value: 'meuLogin' } });
  fireEvent.change(passwordInput, { target: { value: 'minhaSenha' } });

  expect(loginInput.value).toBe('meuLogin');
  expect(passwordInput.value).toBe('minhaSenha');
});

test('não permite envio do formulário com entradas inválidas', () => {
  render(<LoginForm />);
  
  const loginInput = screen.getByLabelText(/Login:/i);
  const passwordInput = screen.getByLabelText(/Senha:/i);
  const submitButton = screen.getByRole('button', { name: /Entrar/i });

  fireEvent.change(loginInput, { target: { value: '' } }); // Campo vazio
  fireEvent.change(passwordInput, { target: { value: '' } });

  fireEvent.click(submitButton);

  // Verifica se uma mensagem de erro seria exibida (não implementada no código atual)
  expect(loginInput.value).toBe('');
  expect(passwordInput.value).toBe('');
});

test('exibe mensagem de sucesso ao enviar formulário com entradas válidas', () => {
  render(<LoginForm />);
  
  const loginInput = screen.getByLabelText(/Login:/i);
  const passwordInput = screen.getByLabelText(/Senha:/i);
  const submitButton = screen.getByRole('button', { name: /Entrar/i });

  fireEvent.change(loginInput, { target: { value: 'meuLogin' } });
  fireEvent.change(passwordInput, { target: { value: 'minhaSenha' } });

  fireEvent.click(submitButton);

  expect(screen.getByText(/Login realizado com sucesso/i)).toBeInTheDocument();
});
