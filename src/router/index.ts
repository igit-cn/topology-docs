import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path:'/',
    name:'Index',
    component:()=>
      import(/* webpackChunkName: "index" */ '../views/Index.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    redirect:'/introduce',
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
        path: '/faq',
        name: 'Faq',
        component: () =>
          import(/* webpackChunkName: "faq" */ '../views/Faq.vue')
      },
      {
        path: '/support',
        name: 'Support',
        component: () =>
          import(/* webpackChunkName: "support" */ '../views/Support.vue')
      },
      {
        path: '/canvas',
        name: 'Canvas',
        component: () =>
          import(/* webpackChunkName: "canvas" */ '../views/Canvas.vue')
      },{
        path: '/updatelog',
        name: 'UpdateLog',
        component: () =>
          import(/* webpackChunkName: "updateLog" */ '../views/UpdateLog.vue')
      },{
        path: '/rect',
        name: 'Rect',
        component: () =>
          import(/* webpackChunkName: "rect" */ '../views/apis/Rect.vue')
      },{
        path: '/point',
        name: 'Point',
        component: () =>
          import(/* webpackChunkName: "support" */ '../views/apis/Point.vue')
      },{
        path: '/paint',
        name: 'Paint',
        component: () =>
          import(/* webpackChunkName: "support" */ '../views/apis/Paint.vue')
      },{
        path: '/canvas',
        name: 'Canvas',
        component: () =>
          import(/* webpackChunkName: "support" */ '../views/apis/Canvas.vue')
      },{
        path: '/node',
        name: 'Node',
        component: () =>
          import(/* webpackChunkName: "support" */ '../views/apis/Node.vue')
      },{
        path: '/line',
        name: 'Line',
        component: () =>
          import(/* webpackChunkName: "support" */ '../views/apis/Line.vue')
      },{
        path: 'arrow',
        name: 'Arrow',
        component: () =>
          import(/* webpackChunkName: "support" */ '../views/apis/Arrow.vue')
      },{
        path: 'anchor',
        name: 'Anchor',
        component: () =>
          import(/* webpackChunkName: "support" */ '../views/apis/Anchor.vue')
      },{
        path: 'control',
        name: 'Control',
        component: () =>
          import(/* webpackChunkName: "support" */ '../views/apis/Control.vue')
      },{
        path: 'animation',
        name: 'Animation',
        component: () =>
          import(/* webpackChunkName: "support" */ '../views/apis/Animation.vue')
      },{
        path: 'offlineLayer',
        name: 'OfflineLayer',
        component: () =>
          import(/* webpackChunkName: "support" */ '../views/apis/OfflineLayer.vue')
      },{
        path: 'selectLayer',
        name: 'SelectLayer',
        component: () =>
          import(/* webpackChunkName: "support" */ '../views/apis/SelectLayer.vue')
      },{
        path: 'floatLayer',
        name: 'FloatLayer',
        component: () =>
          import(/* webpackChunkName: "support" */ '../views/apis/FloatLayer.vue')
      },{
        path: 'animationLayer',
        name: 'AnimationLayer',
        component: () =>
          import(/* webpackChunkName: "support" */ '../views/apis/AnimationLayer.vue')
      },{
        path: 'msgEvent',
        name: 'MsgEvent',
        component: () =>
          import(/* webpackChunkName: "support" */ '../views/apis/MsgEvent.vue')
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
