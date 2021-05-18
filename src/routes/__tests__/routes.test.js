import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';

import App from '@src/App';

describe('Routes Test', () => {
  let mountedComponent;

  beforeEach(() => {
    mountedComponent = render(<App />);
  });

  it.skip('input link click', async () => {
    const { getByTestId, queryByTestId } = mountedComponent;

    await waitFor(() => {
      const value = getByTestId('nav-input');
      fireEvent.click(value);
      const { pathname } = location;
      expect(pathname).toBe('/input');

      const input = queryByTestId('input');
      expect(input).toBeInTheDocument();
    });
  });
});
