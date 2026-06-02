<script setup>
import { ref } from 'vue'
import MovieItem from '@/MovieItem.vue'

const movies = ref([
  { id: 1, title: 'Inception', year: 2010, reviews: [] },
  { id: 2, title: 'Interstellar', year: 2014, reviews: [] },
  { id: 3, title: 'The Matrix', year: 1999, reviews: [] },
])

function handleAddReview({ id, text }) {
  const movie = movies.value.find((m) => m.id === id)
  if (movie) {
    movie.reviews.push(text)
  }
}
</script>

<template>
  <div>
    <h1>Movies & Reviews</h1>

    <div v-for="movie in movies" :key="movie.id">
      <MovieItem
        :id="movie.id"
        :title="movie.title"
        :year="movie.year"
        :reviews="movie.reviews"
        :minLength="3"
        placeholder="Schrijf een review..."
        @add-review="handleAddReview"
      />
    </div>
  </div>
</template>
