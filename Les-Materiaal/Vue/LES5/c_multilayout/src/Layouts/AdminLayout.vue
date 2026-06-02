<script setup>
</script>

<template>
  <div class="layout">
    <aside class="sidebar">
      <h2>Admin Panel</h2>

      <nav>
        <RouterLink to="/admin/home" class="link">Home Admin</RouterLink>
        <RouterLink to="/admin/about" class="link">About Admin</RouterLink>
      </nav>
    </aside>

    <main class="content">
      <p class="title">Dit is het dashboard van de AdminLayout</p>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  min-height: 100vh;
  font-family: Arial, sans-serif;
}

.sidebar {
  width: 220px;
  background: #111827;
  color: white;
  padding: 20px;
}

.sidebar h2 {
  margin-bottom: 20px;
  font-size: 18px;
}

nav {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.link {
  color: #9ca3af;
  text-decoration: none;
  padding: 8px;
  border-radius: 6px;
}

.link:hover {
  background: #374151;
  color: white;
}

.content {
  flex: 1;
  padding: 20px;
  background: #f9fafb;
}

.title {
  font-size: 16px;
  margin-bottom: 10px;
}
</style>
