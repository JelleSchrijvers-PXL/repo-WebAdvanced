<script setup lang="ts">
import {mijnVakken} from "@/data/vakkendata.js";

const vakken = mijnVakken
const studentNaam = 'Jan Janssens';
const aantalvakken = vakken.length;
const credits = vakken.reduce((totaal, vak) => totaal + vak.credits, 0);
</script>

<template>
  <div class="home">
    <h2 class="subtitle">Welkom, {{ studentNaam }}</h2>

    <div class="stats-grid">
      <div class="stat-card">
        <span class="stat-number">{{aantalvakken}}</span>
        <span class="stat-label">Vakken</span>
      </div>
      <div class="stat-card">
        <span class="stat-number">{{credits}}</span>
        <span class="stat-label">Credits</span>
      </div>
      <div class="stat-card">
        <span class="stat-number">3</span>
        <span class="stat-label">Aankomende evenementen</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home {
  padding: 2rem;
}

.subtitle {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: #333;
}

.stats-grid {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.stat-card {
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 150px;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: bold;
  color: #007bff;
}

.stat-label {
  font-size: 0.95rem;
  color: #555;
  margin-top: 0.5rem;
  text-align: center;
}
</style>