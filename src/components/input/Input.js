import React, { useState } from 'react';

import './input.scss';

export default ({ name }) => {
  const [value, setValue] = useState('');

  const keyUpHanlder = ({ target }) => {
    setValue(target.value);
  };

  return (
    <>
      <input
        type="text"
        name="input"
        defaultValue={value}
        onKeyUp={keyUpHanlder}
        data-testid="input"
      />
      <label>{value}</label>
    </>
  );
};
