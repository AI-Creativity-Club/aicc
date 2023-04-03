import { render, screen } from '@testing-library/react';
import App from './App';

test('renders our github link', () => {
  render(<App />);
  const linkElement = screen.getByText(/our github/i);
  expect(linkElement).toBeInTheDocument();
});
