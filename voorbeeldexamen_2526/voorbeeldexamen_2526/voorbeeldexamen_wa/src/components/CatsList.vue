<script setup>
import { useCatsStore } from '@/stores/cats.js'

defineProps({
  title: {
    type: String,
    required: true,
  },
})

const emit = defineEmits(['adopted'])
const catsStore = useCatsStore()
const catImages = import.meta.glob('@/assets/*.jpg', {
  eager: true,
  query: '?url',
  import: 'default',
})

function getCatImage(imgPath) {
  return catImages[`/src/assets/${imgPath}`]
}

function adoptCat(cat) {
  emit('adopted', cat.name)
  catsStore.adoptCat(cat.id)
}
</script>

<template>
  <section>
    <h2>{{ title }}</h2>

    <div
      v-for="cat in catsStore.cats"
      :key="cat.id"
      class="cat"
      :class="{ expensive: cat.price > 500 }"
    >
      <img :src="getCatImage(cat.imgPath)" :alt="cat.name" />

      <div class="cat-info">
        <h3>{{ cat.name }}</h3>
        <p>{{ cat.price }} euro</p>
        <button @click="adoptCat(cat)">Adopteer mij</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
h2 {
  margin-bottom: 1rem;
}

.cat {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  padding: 1rem;
  border: 2px solid transparent;
}

.cat.expensive {
  background-color: lightcoral;
  border-color: red;
}

.cat img {
  width: 140px;
  height: 100px;
  object-fit: cover;
}

.cat-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
}

button {
  cursor: pointer;
}
</style>
