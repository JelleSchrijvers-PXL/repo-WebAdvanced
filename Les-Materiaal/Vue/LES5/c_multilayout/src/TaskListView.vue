<script setup>
import {ref, computed, onMounted, watch} from 'vue'
import TaskItem from '@/TaskItem.vue'

const taken = ref([])
const nieuweTaskInput = ref('')

onMounted(() => {
  // Haal hier alle taken op uit de localstorage en zet
  // deze in de array taken
  // we kiezen ervoor om de varaible 'mijn_taken_app'
  const opgeslagenTaken = localStorage.getItem('mijn_taken_app')
  if (opgeslagenTaken) {
    taken.value = JSON.parse(opgeslagenTaken)
  }
})

watch(taken, (nieuwewaarde) => {
  localStorage.setItem('mijn_taken_app', JSON.stringify(nieuwewaarde))
}, {deep: true})//deep is cruciaal voor objecten in een array

const openstaandeTaken = computed(() => {
  return taken.value.filter(taak => !taak.voltooid)
})
const aantalOpenstaandeTaken = computed(() => {
  return openstaandeTaken.value.length
})

const toggleTaakStatus = (index) => {
  taken.value[index].voltooid = !taken.value[index].voltooid
}
const voegtoe = () => {
  if (nieuweTaskInput.value && nieuweTaskInput.value.trim() !== '') {
    taken.value.push({
      tekst: nieuweTaskInput.value,
      voltooid: false,
    })
    nieuweTaskInput.value = ''
  }
}
const verwijderTaak = (index) => {
  taken.value.splice(index, 1);
}
</script>

<template>
  <div class="task-list-container">
    <p>er zijn {{aantalOpenstaandeTaken}} openstaande taken</p>
    <H1>Lijst van taken</H1>
    <br />
    <div class="input-sectie">
      <input v-model="nieuweTaskInput" placeholder="nieuwe taak ..." />
      <button @click="voegtoe">Toevoegen</button>
    </div>
    <ul>
      <TaskItem
        v-for="(item, i) in taken"
        :key="i"
        :taak="item"
        :index="i"
        @toggle-status="toggleTaakStatus"
        @verwijder="verwijderTaak"
      />
    </ul>
  </div>
</template>

<style scoped>
.task-list-container {
  max-width: 400px;
  margin: 20px auto;
  font-family: sans-serif;
}
.input-sectie {
  margin: 15px 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
</style>
