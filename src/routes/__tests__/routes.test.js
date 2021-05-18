import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';

import App from '@src/App';

describe.skip('Routes Test', () => {
  let mountedComponent;

  beforeEach(() => {
    mountedComponent = render(<App />);
  });

  it('input link click', async () => {
    const { getByTestId, queryByTestId } = mountedComponent;

    await waitFor(() => {
      const value = getByTestId('nav-input');

      fireEvent.click(value);

      const { pathname } = location;
      const input = queryByTestId('input');

      expect(pathname).toBe('/input');
      expect(input).toBeInTheDocument();
    });
  });
});
