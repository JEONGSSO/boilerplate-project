import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Header } from './layout';

import routes from '@src/routes';

export default () => (
  <Router>
    <Header />
    <main>
      {routes.map((route) => (
        <Route key={route.name} {...route} />
      ))}
    </main>
  </Router>
);
