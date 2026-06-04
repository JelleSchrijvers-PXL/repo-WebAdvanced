<script setup>
import { ref, computed, watch } from 'vue'
import Pagination from '@/Pagination.vue'
import { products } from '@/data/products.js'

const page = ref(1)
const pageSize = ref(6)

const total = products.length

// Reset naar pagina 1 wanneer pageSize verandert
watch(pageSize, () => {
  page.value = 1
})

const paginatedProducts = computed(() => {
  const start = (page.value - 1) * pageSize.value
  const end = start + pageSize.value
  return products.slice(start, end)
})

const statusText = computed(() => {
  const start = (page.value - 1) * pageSize.value + 1
  const end = Math.min(page.value * pageSize.value, total)
  return `Producten ${start}–${end} van ${total}`
})

function handleNavigate(e) {
  console.log('Navigated:', e)
}
</script>

<template>
  <div>
    <h1>Producten</h1>

    <!-- PageSize Switch -->
    <label>
      Producten per pagina:
      <select v-model="pageSize">
        <option :value="6">6</option>
        <option :value="9">9</option>
        <option :value="12">12</option>
      </select>
    </label>

    <p>{{ statusText }}</p>

    <ul>
      <li v-for="p in paginatedProducts" :key="p.id">{{ p.name }} — €{{ p.price }}</li>
    </ul>

    <Pagination v-model="page" :total="total" :pageSize="pageSize" @navigate="handleNavigate" />
  </div>
</template>
