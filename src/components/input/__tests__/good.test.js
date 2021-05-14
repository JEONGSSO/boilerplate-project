import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { Input } from '../index';

describe.skip('test', () => {
  it('input 값 label렌더링 확인', () => {
    const { getByText, queryByTestId } = render(<Input />);

    const input = queryByTestId('input');
    fireEvent.keyUp(input, { target: { value: 'good' } });

    const textElem = getByText(/good/i);
    expect(textElem.textContent).toBe('good');
  });
});
