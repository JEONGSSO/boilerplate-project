import React, { useState } from 'react';

export default () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <button onClick={decrement}>-</button>
      <label data-testid="value">{count}</label>
      <button onClick={increment}>+</button>
    </div>
  );
};
