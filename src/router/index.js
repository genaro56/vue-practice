import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home';
import Store from '../components/Store';
import Grid from '../components/Grid/Grid';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/services',
      name: 'Services',
      component: Store,
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Grid,
    },
  ],
});
