<script setup>
</script>

<template>
  <div class="layout">
    <aside class="sidebar">
      <h2>User Dashboard</h2>

      <nav>
        <RouterLink to="/" class="link">Home</RouterLink>
        <RouterLink to="/about" class="link">About</RouterLink>
        <RouterLink to="/tasklist" class="link">TaskList</RouterLink>
      </nav>
    </aside>

    <main class="content">
      <p class="title">Dit is het dashboard van de UserLayout</p>
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
  background: #1f2937;
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
  color: #cbd5e1;
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
  background: #f3f4f6;
}

.title {
  font-size: 16px;
  margin-bottom: 10px;
}
</style>
