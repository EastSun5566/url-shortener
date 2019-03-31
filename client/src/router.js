import Vue from 'vue';
import Router from 'vue-router';

import Index from './views/Index.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
    },
    {
      path: '/urls',
      name: 'index-urls',
      component: () => import('./views/ShortUrl.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue'),
    },
  ],
});
