import React from 'react';
import { render, cleanup } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('Renders without error', () => {
    render(<App />);
  });
});
