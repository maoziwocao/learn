import Vue from 'vue';
import Router from 'vue-router';
import Nav from './views/Nav.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'nav',
      component: Nav,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   // component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    //   component: '@/views/About.vue',
    // },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/Home.vue'),
    },
    {
      path: '/deepClone',
      name: 'deepClone',
      component: () => import('./components/DeepClone.vue'),
    },
    {
      path: '/debounce',
      name: 'debounce ',
      component: () => import('./components/Debounce.vue'),
    },
    {
      path: '/component',
      component: () => import('./components/npmComponent.vue'),
    },
    {
      path: '/uniqueSelect',
      component: () => import('./components/uniqueSelect.vue'),
    },
    {
      path: '/baseInput',
      component: () => import('./components/baseInput.vue'),
    },
  ],
});
