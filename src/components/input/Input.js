import React, { useState } from 'react';

export default ({ name }) => {
  const [value, setValue] = useState('');

  const keyUpHanlder = ({ target }) => {
    setValue(target.value);
  };

  return (
    <>
      <input
        type="text"
        name="inp"
        defaultValue={value}
        onKeyUp={keyUpHanlder}
        data-testid="input"
      />
      <label>{value}</label>
    </>
  );
};
