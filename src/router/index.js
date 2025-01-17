import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/Home.vue';
import JobsView from '../views/JobsView.vue';
import NotFindView from '../views/404View.vue';
import JobView from '../views/JobView.vue';
import AddJobView from '../views/AddJobView.vue';
import EditjobView from '../views/EditJobView.vue';

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
    path: '/jobs/:id',
    name: 'job',
    component: JobView,
    },
    {
      path: '/jobs/add',
      name: 'add-job',
      component: AddJobView,
      },
      {
        path: '/jobs/edit/:id',
        name: 'edit-job',
        component: EditjobView,
        },
    {
      path: '/:catchAll(.*)*',
      name: 'not-found',
      component: NotFindView,
    },
  ],
});

export default router;
