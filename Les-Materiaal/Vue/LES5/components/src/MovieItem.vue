<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  id: Number,
  title: String,
  year: Number,
  reviews: Array,
  placeholder: {
    type: String,
    default: 'Type your review...',
  },
  minLength: {
    type: Number,
    default: 3,
  },
})

const emit = defineEmits(['add-review'])

const text = ref('')
const error = ref('')

const isValid = computed(() => text.value.length >= props.minLength)

function submitReview() {
  if (!isValid.value) {
    error.value = `Review moet minstens ${props.minLength} karakters bevatten`
    return
  }

  emit('add-review', { id: props.id, text: text.value })
  text.value = ''
  error.value = ''
}
</script>

<template>
  <div class="movie">
    <h2>{{ title }} ({{ year }})</h2>

    <p>
      <strong>{{ reviews.length }}</strong> reviews
    </p>

    <ul>
      <li v-for="(r, index) in reviews" :key="index">{{ r }}</li>
    </ul>

    <input v-model="text" :placeholder="placeholder" type="text" />

    <button :disabled="!isValid" @click="submitReview">Voeg review toe</button>

    <p v-if="error" style="color: red">{{ error }}</p>
  </div>
</template>

<style scoped>
.movie {
  border: 1px solid #ccc;
  padding: 1rem;
  margin-bottom: 1rem;
}
</style>
