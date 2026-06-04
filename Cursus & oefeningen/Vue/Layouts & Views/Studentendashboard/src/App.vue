<script setup>
import {useRoute} from "vue-router";
const route = useRoute();
</script>

<template>
  <header>
    <div>
      <H1>Studenten Dashboard</H1>
      <p>De huidige pagina: <span>{{route.name}}</span></p>
    </div>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/vakken">Vakken</RouterLink>
    <RouterLink to="/evenementen">Evenementen</RouterLink>
  </header>
  <main>
    <router-view/>
  </main>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;800&family=DM+Mono:wght@400;500&display=swap');

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

header {
  --bg: #0d0f14;
  --surface: #13161e;
  --border: #1f2330;
  --accent: #c8f135;
  --accent-dim: rgba(200, 241, 53, 0.12);
  --text: #e8eaf0;
  --muted: #5a5f72;

  font-family: 'Syne', sans-serif;
  background: var(--surface);
  border-bottom: 1px solid var(--border);
}

/* bovenste blok (titel + pagina info) */
header > div {
  max-width: 1100px;
  margin: 0 auto;
  padding: 1.25rem 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* titel */
h1 {
  font-size: 1.1rem;
  font-weight: 800;
  color: var(--text);
  letter-spacing: -0.02em;
  text-transform: uppercase;
}

/* pagina tekst */
header p {
  font-family: 'DM Mono', monospace;
  font-size: 0.8rem;
  color: var(--muted);

  background: var(--accent-dim);
  border: 1px solid rgba(200, 241, 53, 0.2);
  border-radius: 4px;

  padding: 0.3rem 0.8rem;
}

header p span {
  color: var(--accent);
}

/* nav links */
header a {
  font-family: 'DM Mono', monospace;
  font-size: 0.78rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.08em;

  color: var(--muted);
  text-decoration: none;

  padding: 0.85rem 1.25rem;
  position: relative;

  display: inline-block;
  transition: color 0.2s ease;
}

/* underline effect */
header a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 1.25rem;
  right: 1.25rem;
  height: 2px;
  background: var(--accent);
  transform: scaleX(0);
  transition: transform 0.2s ease;
}

header a:hover {
  color: var(--text);
}

header a:hover::after {
  transform: scaleX(1);
}

/* active router link */
header a {
  color: var(--accent);
}

header a::after {
  transform: scaleX(1);
}
</style>
