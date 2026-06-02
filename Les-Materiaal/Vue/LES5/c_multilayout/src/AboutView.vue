<script setup>
import { ref } from 'vue'
import ChildComponent from '@/ChildComponent.vue'
const naam = ref('')
const leeftijd = ref('')
const actief = ref(false)

function handleData({ name, age, active }) {
  // console.log('Naam:', name)
  // console.log('Leeftijd:', age)
  // console.log('Actief:', active)
  naam.value = name
  leeftijd.value = age
  actief.value = active
}
</script>

<template>
  <hr />
  <p>Dit is de Aboutpage van de USER</p>
  <ul>
    <li>{{ naam }}</li>
    <li>{{ leeftijd }}</li>
    <li>{{ actief }}</li>
  </ul>
  <hr />
  <ChildComponent @data-sent="handleData" />
</template>

<style scoped></style>
