import { createRouter, createWebHashHistory } from 'vue-router';
import Bet from '@/views/bet';

const routes = [
  {
    path: '/',
    redirect: '/bet',
  },
  {
    path: '/bet',
    name: 'bet',
    component: Bet,
  },
  {
    path: '/main',
    name: 'main',
    component: () => import(/* webpackChunkName: "about" */ '@/views/main'),
  },
  {
    path: '/recharge',
    name: 'recharge',
    component: () => import(/* webpackChunkName: "about" */ '@/views/recharge'),
  },
  {
    path: '/rule',
    name: 'rule',
    component: () => import(/* webpackChunkName: "about" */ '@/views/rule'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
