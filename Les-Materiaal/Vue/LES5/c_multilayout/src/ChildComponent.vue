<script setup>
const emit = defineEmits(['data-sent'])

function sendData() {
  const name = 'John'
  const age = 28
  const active = true
  alert('het object moet worden verstuurd naar de parent (About) ...')
  emit('data-sent', { name, age, active }) // pakje versturen
}
</script>

<template>
  <button @click="sendData">Stuur data</button>
</template>

<style scoped></style>
