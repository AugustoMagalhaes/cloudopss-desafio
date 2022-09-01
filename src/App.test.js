import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';

describe('Teste', () => {
  it('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/Hello/i);
    expect(linkElement).toBeInTheDocument();
  });
});
