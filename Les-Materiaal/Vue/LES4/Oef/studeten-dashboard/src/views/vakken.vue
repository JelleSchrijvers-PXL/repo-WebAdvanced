<script setup>
import {mijnVakken} from "@/data/vakkendata.js";

const vakken = mijnVakken
</script>

<template>
  <div class="vakken">
    <h2 class="subtitle">Mijn vakken</h2>

    <div class="vak-list">
      <div class="vak-card" v-for="vak in vakken" :key="vak.naam">
        <div class="vak-naam">{{ vak.naam }}</div>
        <div class="vak-info">
          <span class="vak-credits">{{ vak.credits }} ECTS</span>
          <span class="vak-docent">{{ vak.docent }}</span>
        </div>
      </div>
    </div>

    <button class="btn-primary" @click="$router.push('/evenementen')">
      Naar mijn evenementen
    </button>
  </div>
</template>

<style scoped>
.vakken {
  padding: 2rem;
}

.subtitle {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: #333;
}

.vak-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

.vak-card {
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.vak-naam {
  font-size: 1.05rem;
  font-weight: bold;
  color: #222;
}

.vak-info {
  display: flex;
  gap: 1.5rem;
  color: #555;
  font-size: 0.9rem;
}

.vak-credits {
  font-weight: 600;
  color: #007bff;
}

.btn-primary {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
}

.btn-primary:hover {
  background-color: #0056b3;
}
</style>