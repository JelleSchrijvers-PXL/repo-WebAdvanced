<script setup></script>

<template>

  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/movies">Movies</RouterLink>
    <RouterLink to="/pagination">Products</RouterLink>
  </nav>
  <hr />
  <RouterView />
</template>

<style scoped>
nav {
  background-color: #333; /* Donkergrijze achtergrond */
  padding: 15px 0;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* Subtiele schaduw */
}

nav a {
  color: white; /* Witte tekst */
  text-decoration: none; /* Geen onderstreping */
  padding: 15px 25px;
  font-family: 'Arial', sans-serif; /* Modern en leesbaar lettertype */
  font-size: 1.1em;
  transition:
    background-color 0.3s ease,
    color 0.3s ease; /* Vloeiende overgang bij hover */
  border-radius: 5px; /* Licht afgeronde hoeken voor knop-effect */
  margin: 0 10px; /* Ruimte tussen de links */
}

nav a:hover,
nav a.router-link-active {
  background-color: #555; /* Lichtere achtergrond bij hover of actieve link */
  color: #00bcd4; /* Accentkleur voor actieve/hover-state */
  transform: translateY(-2px); /* Klein omhoog-effect bij hover */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Meer uitgesproken schaduw bij hover */
}

/* Optionele stijl voor actieve link om deze meer te benadrukken */
nav a.router-link-active {
  color: #00bcd4; /* Accentkleur */
  border-bottom: 3px solid #00bcd4; /* Onderstreping voor actieve link */
  padding-bottom: 12px; /* Pas padding aan ivm border-bottom */
}
</style>
