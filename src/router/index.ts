import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path:'/introduce',
        name:'Introduce',
        component:() => 
          import(/* webpackChunkName: "introduce" */ '../views/Introduce.vue')
      },{
        path:'/quickstart',
        name:'Quickstart',
        component:() =>
          import(/* webpackChunkName: "quickstart" */ '../views/Quickstart.vue')
      },
      {
        path: 'faq',
        name: 'Faq',
        component: () =>
          import(/* webpackChunkName: "faq" */ '../views/Faq.vue')
      },
      {
        path: 'support',
        name: 'Support',
        component: () =>
          import(/* webpackChunkName: "support" */ '../views/Support.vue')
      },
      {
        path: 'canvas',
        name: 'Canvas',
        component: () =>
          import(/* webpackChunkName: "canvas" */ '../views/Canvas.vue')
      },{
        path: 'updatelog',
        name: 'UpdateLog',
        component: () =>
          import(/* webpackChunkName: "updateLog" */ '../views/UpdateLog.vue')
      },{
        path: 'rect',
        name: 'Rect',
        component: () =>
          import(/* webpackChunkName: "rect" */ '../views/Rect.vue')
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
router.beforeEach((to, from, next) => {
  // (window as any).Store.set('anchorList', [])
  next()
})
export default router;
