<script setup>
import { ref, onMounted, onUpdated, onUnmounted } from 'vue'
const count = ref(0)
let intervalId = null

onMounted(() => {
  console.log('Component is gemount')
  intervalId = setInterval(() => {
    count.value++
  }, 1000)
})

onUpdated(() => {
  console.log('Component is bijgewerkt. Huidige count:', count.value)
})

onUnmounted(() => {
  console.log('Component wordt vernietigd')
  clearInterval(intervalId)
})
</script>

<template>
  <div>
    <p>Count: {{ count }}</p>
  </div>
</template>
