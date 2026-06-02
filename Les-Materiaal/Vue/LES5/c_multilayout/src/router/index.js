import { createRouter, createWebHistory } from 'vue-router'
import UserLayout from '@/Layouts/UserLayout.vue'
import TaskListView from '@/TaskListView.vue'
import AboutView from '@/AboutView.vue'
import HomeView from '@/HomeView.vue'
import AdminLayout from '@/Layouts/AdminLayout.vue'
import HomeAdminView from '@/HomeAdminView.vue'
import AboutAdminView from '@/AboutAdminView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/admin',
      component: AdminLayout,
      children: [
        {
          path: 'home',
          name: 'AdminHome',
          component: HomeAdminView,
        },
        {
          path: 'about',
          name: 'AdminAbout',
          component: AboutAdminView,
        },
      ],
    },
    {
      path: '/',
      component: UserLayout,
      children: [
        {
          path: 'tasklist',
          name: 'TaskList',
          component: TaskListView,
        },
        {
          path: 'about',
          name: 'About',
          component: AboutView,
        },
        {
          path: '/',
          name: 'Home',
          component: HomeView,
        },
      ],
    },
  ],
})

export default router
