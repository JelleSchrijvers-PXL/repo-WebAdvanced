<script setup lang="ts">
import {useRoute} from "vue-router";
const route = useRoute();

</script>

<template>
  <div class="layout-top">
    <header class="site-header">
      <div class="header-inner">
        <div class="brand">
          <span class="brand-icon">⬡</span>
          <h1>Studenten Dashboard</h1>
        </div>
        <div class="current-page">
          <span class="label">pagina</span>
          <span class="page-name">{{ route.name }}</span>
        </div>
      </div>
    </header>

    <nav class="site-nav">
      <RouterLink to="/" class="nav-link">Home</RouterLink>
      <RouterLink to="/vakken" class="nav-link">Vakken</RouterLink>
      <RouterLink to="/evenementen" class="nav-link">Evenementen</RouterLink>
    </nav>
  </div>
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

.layout-top {
  --bg: #0d0f14;
  --surface: #13161e;
  --border: #1f2330;
  --accent: #c8f135;
  --accent-dim: rgba(200, 241, 53, 0.12);
  --text: #e8eaf0;
  --muted: #5a5f72;

  font-family: 'Syne', sans-serif;
  background: var(--bg);
}

/* ── Header ─────────────────────────────── */
.site-header {
  border-bottom: 1px solid var(--border);
  background: var(--surface);
}

.header-inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 1.25rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.brand-icon {
  font-size: 1.4rem;
  color: var(--accent);
  line-height: 1;
  animation: spin 12s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

h1 {
  font-size: 1.1rem;
  font-weight: 800;
  color: var(--text);
  letter-spacing: -0.02em;
  text-transform: uppercase;
}

.current-page {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--accent-dim);
  border: 1px solid rgba(200, 241, 53, 0.2);
  border-radius: 4px;
  padding: 0.3rem 0.8rem;
}

.label {
  font-family: 'DM Mono', monospace;
  font-size: 0.65rem;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.page-name {
  font-family: 'DM Mono', monospace;
  font-size: 0.8rem;
  color: var(--accent);
  font-weight: 500;
}

/* ── Nav ─────────────────────────────────── */
.site-nav {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  gap: 0;
}

.nav-link {
  font-family: 'DM Mono', monospace;
  font-size: 0.78rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--muted);
  text-decoration: none;
  padding: 0.85rem 1.25rem;
  position: relative;
  transition: color 0.2s ease;
}

.nav-link::after {
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

.nav-link:hover {
  color: var(--text);
}

.nav-link:hover::after {
  transform: scaleX(1);
}

.nav-link.router-link-active {
  color: var(--accent);
}

.nav-link.router-link-active::after {
  transform: scaleX(1);
}
</style>