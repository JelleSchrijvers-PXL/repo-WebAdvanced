<script setup>
const evenementen = [
  { naam: 'Inleveren opdracht 1',  datum: '15-04-2026' },
  { naam: 'Projectpresentatie',    datum: '20-05-2026' },
  { naam: 'Examen Web Advanced',   datum: '24-06-2026' }
]
</script>

<template>
  <div class="evenementen">
    <h2 class="subtitle">Aankomende evenementen</h2>

    <div class="event-list">
      <div class="event-card" v-for="event in evenementen" :key="event.naam">
        <span class="event-naam">{{ event.naam }}</span>
        <span class="event-datum">{{ event.datum }}</span>
      </div>
    </div>

    <button class="btn-primary" @click="$router.push('/')">
      Terug naar home
    </button>
  </div>
</template>

<style scoped>
.evenementen {
  padding: 2rem;
}

.subtitle {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: #333;
}

.event-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

.event-card {
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.event-naam {
  font-size: 1.05rem;
  font-weight: 600;
  color: #222;
}

.event-datum {
  font-size: 0.95rem;
  color: #555;
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
