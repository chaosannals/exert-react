// import React from 'react';
import { render, screen } from '@testing-library/react';
import IndexPage from './IndexPage';

test('renders learn react link', () => {
  render(<IndexPage />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
