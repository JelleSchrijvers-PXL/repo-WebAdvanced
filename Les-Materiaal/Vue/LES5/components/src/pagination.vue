<script setup>
import { computed } from 'vue'

const props = defineProps({
  modelValue: { type: Number, required: true },
  total: { type: Number, required: true },
  pageSize: { type: Number, default: 6 },
})

const emit = defineEmits(['update:modelValue', 'navigate'])

const totalPages = computed(() => Math.ceil(props.total / props.pageSize))

function goTo(page) {
  if (page < 1 || page > totalPages.value) return

  emit('navigate', { from: props.modelValue, to: page })
  emit('update:modelValue', page)
}

function first() {
  goTo(1)
}
function prev() {
  goTo(props.modelValue - 1)
}
function next() {
  goTo(props.modelValue + 1)
}
function last() {
  goTo(totalPages.value)
}
</script>

<template>
  <div class="pagination">
    <button @click="first" :disabled="modelValue === 1">⏮</button>
    <button @click="prev" :disabled="modelValue === 1">◀</button>

    <button
      v-for="page in totalPages"
      :key="page"
      @click="goTo(page)"
      :class="{ active: modelValue === page }"
    >
      {{ page }}
    </button>

    <button @click="next" :disabled="modelValue === totalPages">▶</button>
    <button @click="last" :disabled="modelValue === totalPages">⏭</button>
  </div>
</template>

<style scoped>
.pagination button.active {
  background: #333;
  color: white;
}
</style>
