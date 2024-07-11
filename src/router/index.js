import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/Home.vue';
import JobsView from '../views/JobsView.vue';
import NotFindView from '../views/404View.vue';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: JobsView,
    },
    {
      path: '/:pathMatch(.*)*',
      component: NotFindView,
    },
  ],
});

export default router;
