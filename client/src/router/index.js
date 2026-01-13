/**
 * @file Vue Router for the application
 * @author Russell Feldhausen <russfeld@ksu.edu>
 * @exports router a Vue Router
 */

// Import Libraries
import { createRouter, createWebHistory } from 'vue-router'

// Import Views
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  // Configure History Mode
  history: createWebHistory(import.meta.env.BASE_URL),
  // Configure routes
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
  ]
})

export default router
