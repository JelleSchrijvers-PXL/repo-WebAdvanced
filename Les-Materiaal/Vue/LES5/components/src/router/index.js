import { createRouter, createWebHistory } from 'vue-router'
import MovieList from "@/MovieList.vue";
import PaginationView from "@/PaginationView.vue";
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
      component: PaginationView
    }
  ],
})

export default router
