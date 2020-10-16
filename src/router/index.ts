import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'faq',
        name: 'Faq',
        component: () =>
          import(/* webpackChunkName: "guide" */ '../views/Faq.vue')
      },
      {
        path: 'support',
        name: 'Support',
        component: () =>
          import(/* webpackChunkName: "support" */ '../views/Support.vue')
      }
    ]
  },
  {
    path: '/guide',
    name: 'Guide',
    component: () =>
      import(/* webpackChunkName: "guide" */ '../views/Guide.vue')
  },
  {
    path: '/video',
    name: 'Video',
    component: () =>
      import(/* webpackChunkName: "video" */ '../views/Video.vue')
  },
  {
    path: '/community',
    name: 'Community',
    component: () =>
      import(/* webpackChunkName: "community" */ '../views/Community.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
