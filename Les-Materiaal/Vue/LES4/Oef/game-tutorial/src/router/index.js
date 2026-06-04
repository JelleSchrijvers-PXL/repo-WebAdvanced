import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/home.vue";
import About from "@/views/about.vue";
import Rules from "@/views/rules.vue";
import Characters from "@/views/characters.vue";
import Play from "@/views/play.vue";

// lay-outs
import MainLayout from "@/layouts/mainLayout.vue";
import FullScreenLayout from "@/layouts/fullScreenLayout.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      {
          path: '/',
          component: MainLayout,
          children: [
              { path: '', name: 'home', component: Home },
              { path: 'rules', name: 'rules', component: Rules },
              { path: 'characters', name: 'characters', component: Characters },
              { path: 'about', name: 'about', component: About },
          ],
      },
      {
          path: '/play',
          component: FullScreenLayout,
          children: [
              { path: '', name: 'play', component: Play },
          ],
      },
  ],
});

export default router
