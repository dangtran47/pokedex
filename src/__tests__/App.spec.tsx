import { describe, it, expect, afterEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';

import App from '../App';

describe('Renders main page correctly', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders switch', () => {
    render(<App />);
    expect(screen.getByTestId("switch")).toBeDefined();
  });
})
