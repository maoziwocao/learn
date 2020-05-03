import Vue from 'vue';
import Router from 'vue-router';
import Nav from './views/Nav.vue';
import Home from '@/views/Home.vue';

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
      component: Home,
    },
    // {
    //   path: '/deepClone',
    //   name: 'deepClone',
    //   // component: () => import('./components/DeepClone.vue'),
    //   component: './views/DeepClone.vue',
    // },
    // {
    //   path: '/debounce',
    //   name: 'debounce ',
    //   // component: () => import('./components/Debounce.vue'),
    //   component: './views/Debounce.vue',
    // },
  ],
});
