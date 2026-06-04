<script setup>
import {useRoute} from "vue-router";
const route = useRoute();
</script>

<template>
  <header class="header">
    <h1 class="title">Game Tutorial</h1>

    <nav class="nav">
      <RouterLink to="/" class="nav-link" :class="{ active: route.path === '/' }">
        Home
      </RouterLink>

      <RouterLink to="/about" class="nav-link" :class="{ active: route.path === '/about' }">
        About
      </RouterLink>
    </nav>
  </header>
</template>

<style scoped>
.header {
  padding: 1.5rem 2rem;
  background-color: #111;
  color: white;
}

.title {
  margin-bottom: 1rem;
  font-size: 1.8rem;
}

.nav {
  display: flex;
  gap: 1rem;
}

.nav-link {
  text-decoration: none;
  color: #bbb;
  font-weight: 500;
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  transition: all 0.2s ease;
}

.nav-link:hover {
  background-color: #222;
  color: white;
}

.nav-link.active {
  background-color: #007bff;
  color: white;
}
</style>