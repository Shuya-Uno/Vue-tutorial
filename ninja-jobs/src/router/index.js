import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import JobsView from '../views/jobs/JobsView.vue'
import JobDetailsView from '../views/jobs/JobDetailsView.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: JobsView
  },
  {
    path: '/jobs/:id',
    name: 'JobDetails',
    component: JobDetailsView
  }
]

// to set route for route parameters, you need to add as an indivudal route.

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
