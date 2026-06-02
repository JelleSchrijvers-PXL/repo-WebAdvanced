import { createRouter, createWebHistory } from 'vue-router'
import MovieList from "@/MovieList.vue";
import PaginationVIew from "@/PaginationVIew.vue";
import HomePage from "@/HomePage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomePage
    },
    {
      path: '/movies',
      component: MovieList
    },
    {
      path: '/pagination',
      component: PaginationVIew
    }
  ],
})

export default router
