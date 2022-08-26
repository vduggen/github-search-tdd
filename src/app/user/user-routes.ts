import { RouteConfig } from 'vue-router';

const userRoutes: Array<RouteConfig> = [
  {
    path: '/',
    component: () => import('./user.vue'),
  },
];

export default userRoutes;
