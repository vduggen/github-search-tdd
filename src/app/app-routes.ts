import Vue from 'vue';

import VueRouter, { RouteConfig } from 'vue-router';

import userRoutes from './user/user-routes';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  ...userRoutes,
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
