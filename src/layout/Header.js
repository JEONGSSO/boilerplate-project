import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default () => {
  const match = useLocation();
  console.log('headerrrrrrrrrr match', match);

  return (
    <header>
      <h1>logo</h1>
      <nav>
        <Link to="/input" data-testid="nav-input">
          input
        </Link>
        <Link to="/counter">counter</Link>
      </nav>
    </header>
  );
};
