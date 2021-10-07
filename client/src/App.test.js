import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Kids Coding Quiz/i);
  expect(linkElement).toBeInTheDocument();
});

test('when user clicks on correct answer, score should increment', () => {
  render(<App />);
  button.find('#1').simulate('click');
});







