<template>
  <div class="app-container">
    <nav class="navbar">
      <div class="nav-brand">💻 TechParts PRO</div>
      <div class="nav-links">
        <router-link to="/hardware" class="nav-item">Overzicht Hardware</router-link>
        <router-link to="/hardware-reviews" class="nav-item">Hardware & Reviews</router-link>
      </div>
    </nav>

    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<style>
/* Globale CSS & Reset */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  background-color: #0b132b;
  color: #f4f5f6;
}
.app-container {
  min-height: 100vh;
}
/* Prachtige Navbalk */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1c2541;
  padding: 15px 40px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
}
.nav-brand {
  font-size: 22px;
  font-weight: 800;
  color: #4ea8de;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.nav-links {
  display: flex;
  gap: 20px;
}
.nav-item {
  color: #f4f5f6;
  text-decoration: none;
  font-weight: 600;
  padding: 8px 16px;
  border-radius: 6px;
  transition: all 0.3s ease;
}
.nav-item:hover {
  background-color: #3a506b;
  color: #5bc0be;
}
/* Active router link styling */
.router-link-active {
  background-color: #4ea8de;
  color: #0b132b !important;
}
.content {
  padding: 40px;
}
</style>