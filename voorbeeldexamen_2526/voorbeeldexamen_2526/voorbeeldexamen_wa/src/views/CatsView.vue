<script setup>
import { computed, ref } from 'vue'
import CatsList from '@/components/CatsList.vue'
import { useCatsStore } from '@/stores/cats.js'

const catsStore = useCatsStore()
const adoptedCount = ref(0)
const lastAdoptedCat = ref('')

const title = computed(() => `Een gemiddelde kat kost ${catsStore.averagePrice.toFixed(2)} euro`)

const adoptionMessage = computed(() => {
  if (adoptedCount.value === 1) {
    return `${lastAdoptedCat.value} is geadopteerd!`
  }

  return `Er zijn al ${adoptedCount.value} katten geadopteerd. De laatste was ${lastAdoptedCat.value}.`
})

function handleAdoption(catName) {
  adoptedCount.value++
  lastAdoptedCat.value = catName
}
</script>

<template>
  <main>
    <h1 v-if="adoptedCount > 0">{{ adoptionMessage }}</h1>
    <CatsList :title="title" @adopted="handleAdoption" />
  </main>
</template>

<style scoped>
h1 {
  margin-bottom: 1rem;
  color: var(--color-heading);
}
</style>
