import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import ProjectDetail from '../views/ProjectDetail.vue';
import ExperienceDetail from '../views/ExperienceDetail.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/projects/:slug',
    name: 'ProjectDetail',
    component: ProjectDetail,
    props: true,
  },
  {
    path: '/experience/:slug',
    name: 'ExperienceDetail',
    component: ExperienceDetail,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
