<script setup>
</script>

<template>
  <div class="home">
    <h1>Welkom 👋</h1>
    <p>Kies een pagina:</p>

    <div class="links">
      <RouterLink to="/movies">🎬 Movies</RouterLink>
      <RouterLink to="/pagination">🛒 Products</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.home {
  text-align: center;
  margin-top: 50px;
}

.links {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 20px;
}

.links a {
  padding: 10px 20px;
  background: #333;
  color: white;
  border-radius: 5px;
  text-decoration: none;
}

.links a:hover {
  background: #555;
}
</style>
