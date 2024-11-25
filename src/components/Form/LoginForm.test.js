import { render, screen, fireEvent } from '@testing-library/react';
import LoginForm from './LoginForm';

test('renderiza campos de entrada e botão', () => {
  render(<LoginForm />);
  expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/senha/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /entrar/i })).toBeInTheDocument();
});


test('mostra mensagem de erro para entradas vazias', () => {
  render(<LoginForm />);
  fireEvent.click(screen.getByRole('button', { name: /entrar/i }));
  expect(screen.getByText(/todos os campos são obrigatórios/i)).toBeInTheDocument();
});


test('mostra mensagem de erro para email inválido', () => {
  render(<LoginForm />);
  fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'email_invalido' } });
  fireEvent.change(screen.getByLabelText(/senha/i), { target: { value: '123456' } });
  fireEvent.click(screen.getByRole('button', { name: /entrar/i }));
  expect(screen.getByText(/por favor, insira um e-mail válido/i)).toBeInTheDocument();
});


test('realiza login com entradas válidas', () => {
  render(<LoginForm />);
  fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'teste@example.com' } });
  fireEvent.change(screen.getByLabelText(/senha/i), { target: { value: '123456' } });
  fireEvent.click(screen.getByRole('button', { name: /entrar/i }));
  expect(screen.getByText(/Login realizado com sucesso!/i)).toBeInTheDocument();
});
