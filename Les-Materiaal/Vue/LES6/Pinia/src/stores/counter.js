import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  const items = ref([
    {id:0, woord:'computer'},
    {id: 1, woord:'kameel'},
    {id: 2, woord:'Micheal'},
    {id: 3, woord:'Jackson'},
    {id: 4, woord:'Francisco'},
    {id: 5, woord:'Silva'},
    {id: 6, woord:'Ford'},
    {id: 7, woord:'Sain'},
    {id: 8, woord:'Henderson'},
  ])

  return { count, doubleCount, items, increment }
})
