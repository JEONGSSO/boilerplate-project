import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { Counter } from '../index';

describe.skip('카운터 앱', () => {
  let mountedComponent;

  beforeEach(() => {
    mountedComponent = render(<Counter />);
  });

  it('increment Click Event Call', () => {
    const { getByText, getByTestId } = mountedComponent;
    const increButton = getByText('+');

    fireEvent.click(increButton);
    const label = getByTestId('value');

    expect(Number(label.textContent)).toBe(1);
  });

  it('increment Click Event Call', () => {
    const { getByText, getByTestId } = mountedComponent;
    const increButton = getByText('-');

    fireEvent.click(increButton);
    const label = getByTestId('value');

    expect(Number(label.textContent)).toBe(-1);
  });
});
