import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('renders navigation', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const navElement = screen.getByText(/\$XRPNAVY/i);
  expect(navElement).toBeInTheDocument();
});
