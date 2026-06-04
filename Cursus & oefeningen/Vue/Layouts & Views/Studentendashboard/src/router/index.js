import { createRouter, createWebHistory } from 'vue-router'
import EvenementenView from "@/views/EvenementenView.vue";
import VakkenView from "@/views/VakkenView.vue";
import HomeView from "@/views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'home',
      path: '/',
      component: HomeView
    },
    {
      name: 'vakken',
      path: '/vakken',
      component: VakkenView
    },
    {
      name: 'evenementen',
      path : '/evenementen',
      component: EvenementenView
    }
  ],
})

export default router
