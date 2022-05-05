import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  test('renders index', () => {
    const { getByText } = render(<App />);
    const index = getByText(/Horizontal Index: \d+/i);
    expect(index).toBeInTheDocument();
  });
});
