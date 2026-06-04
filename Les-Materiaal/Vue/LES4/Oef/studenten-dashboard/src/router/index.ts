import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'
import Vakken from '../views/vakken.vue'
import Evenementen from "@/views/evenementen.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      {
          name: 'home',
          path: '/',
          component: Home
      },
      {
          name: 'vakken',
          path: '/vakken',
          component: Vakken
      },
      {
          name: 'evenementen',
          path : '/evenementen',
          component: Evenementen
      }
  ],
})

export default router
