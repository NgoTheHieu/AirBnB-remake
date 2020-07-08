import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { ParallaxProvider } from 'react-scroll-parallax';
test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
