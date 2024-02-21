import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AdminView from '../views/AdminView.vue'
import EditClubView from '../views/EditClubView.vue'
import CreateClubView from '../views/CreateClubView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminView,
    },
    { 
      path: '/admin/club/edit/:id',
      name: 'AdminClubEdit',
      component: EditClubView
    },
    { 
      path: '/admin/club/add',
      name: 'AdminClubCreate',
      component: CreateClubView
    }
  ]
})

export default router
