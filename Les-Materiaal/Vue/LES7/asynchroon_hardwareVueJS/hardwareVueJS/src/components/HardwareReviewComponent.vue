<script setup>
import { ref, computed } from 'vue';
import { useHardwareStore } from '../stores/hardwareStore';

const props = defineProps({
  componentData: {
    type: Object,
    required: true
  }
});

const store = useHardwareStore();
const nieuweReview = ref('');

// Haal live de reviews voor DIT specifieke ID uit de store via een computed property
const componentReviews = computed(() => {
  return store.getReviewsPerComponent(props.componentData.id);
});

const voegReviewToe = () => {
  if (nieuweReview.value.trim() === '') return;

  // Push naar de store actie met ID en tekst
  store.voegReviewToe(props.componentData.id, nieuweReview.value);
  nieuweReview.value = ''; // Maak invoerveld leeg
};
</script>

<template>
  <div class="review-card">
    <div class="card-header">
      <img :src="componentData.afbeelding_url" :alt="componentData.naam" />
      <div class="title-overlay">
        <span>{{ componentData.categorie }}</span>
        <h4>{{ componentData.naam }}</h4>
      </div>
    </div>

    <div class="card-body">
      <h5>Reviews ({{ componentReviews.length }})</h5>

      <div class="reviews-box">
        <p v-if="componentReviews.length === 0" class="no-reviews">Nog geen reviews geschreven.</p>
        <ul v-else class="reviews-list">
          <li v-for="(review, index) in componentReviews" :key="index">
            {{ review }}
          </li>
        </ul>
      </div>

      <div class="input-group">
        <input
            v-model="nieuweReview"
            type="text"
            placeholder="Schrijf een review..."
            @keyup.enter="voegReviewToe"
        />
        <button @click="voegReviewToe">Push</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.review-card {
  background-color: #1c2541;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 16px rgba(0,0,0,0.2);
  display: flex;
  flex-direction: column;
}
.card-header {
  position: relative;
  height: 150px;
}
.card-header img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.title-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(transparent, rgba(11, 19, 43, 0.95));
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 15px;
}
.title-overlay span {
  font-size: 11px;
  color: #5bc0be;
  text-transform: uppercase;
  font-weight: bold;
}
.title-overlay h4 {
  font-size: 15px;
  color: #ffffff;
}
.card-body {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
h5 {
  color: #4ea8de;
}
.reviews-box {
  background-color: #0b132b;
  border-radius: 6px;
  padding: 10px;
  min-height: 80px;
  max-height: 120px;
  overflow-y: auto;
}
.no-reviews {
  font-size: 13px;
  color: #64748b;
  font-style: italic;
}
.reviews-list {
  list-style-type: none;
}
.reviews-list li {
  font-size: 13px;
  background-color: #1c2541;
  padding: 6px 10px;
  border-radius: 4px;
  margin-bottom: 6px;
  border-left: 3px solid #5bc0be;
  word-break: break-all;
}
/* Input elementen */
.input-group {
  display: flex;
  gap: 8px;
  margin-top: 5px;
}
input {
  flex-grow: 1;
  background-color: #0b132b;
  border: 1px solid #3a506b;
  border-radius: 6px;
  padding: 8px 12px;
  color: #ffffff;
  outline: none;
  font-size: 14px;
  transition: border 0.2s;
}
input:focus {
  border-color: #4ea8de;
}
button {
  background-color: #4ea8de;
  color: #0b132b;
  border: none;
  border-radius: 6px;
  padding: 8px 14px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;
}
button:hover {
  background-color: #5bc0be;
}
</style>