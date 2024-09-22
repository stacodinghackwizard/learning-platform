import { createRouter, createWebHistory } from 'vue-router';
import CourseLayout from '../components/CourseLayout.vue';
import UserDashboard from '../views/UserDashboard.vue';

const routes = [
  { path: '/', component: CourseLayout },
 

  { path: '/user/:id', name: 'UserDetails', component: UserDashboard, props: true },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
