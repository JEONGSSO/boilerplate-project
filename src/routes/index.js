import { Login } from '@src/components/login';
import { Counter } from '@src/components/counter';

export default [
  {
    name: 'login',
    path: '/login',
    component: Login,
  },
  {
    name: 'counter',
    path: '/counter',
    component: Counter,
  },
];
