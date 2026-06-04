<script setup>
const props = defineProps({
  componentData: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(['afbeeldingGeselecteerd']);

const handleImageClick = () => {
  // Stuur het object mee in de emit naar de parent
  emit('afbeeldingGeselecteerd', props.componentData);
};
</script>

<template>
  <div class="hardware-card">
    <div class="badge">{{ componentData.categorie }}</div>
    <div class="img-container" @click="handleImageClick">
      <img :src="componentData.afbeelding_url" :alt="componentData.naam" />
      <div class="overlay">Klik voor info</div>
    </div>
    <div class="card-info">
      <span class="id-tag">#{{ componentData.id }}</span>
      <h3>{{ componentData.naam }}</h3>
    </div>
  </div>
</template>

<style scoped>
.hardware-card {
  background-color: #1c2541;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 16px rgba(0,0,0,0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  display: flex;
  flex-direction: column;
}
.hardware-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 24px rgba(78, 168, 222, 0.2);
}
.badge {
  position: absolute;
  top: 12px;
  right: 12px;
  background-color: #5bc0be;
  color: #0b132b;
  padding: 4px 10px;
  font-size: 11px;
  font-weight: bold;
  border-radius: 20px;
  z-index: 2;
}
.img-container {
  position: relative;
  height: 200px;
  cursor: pointer;
  overflow: hidden;
}
.img-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}
.img-container:hover img {
  transform: scale(1.1);
}
.overlay {
  position: absolute;
  inset: 0;
  background: rgba(11, 19, 43, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #5bc0be;
  font-weight: bold;
  opacity: 0;
  transition: opacity 0.3s ease;
}
.img-container:hover class {
  opacity: 0;
}
.img-container:hover .overlay {
  opacity: 1;
}
.card-info {
  padding: 20px;
  flex-grow: 1;
}
.id-tag {
  color: #4ea8de;
  font-size: 13px;
  font-weight: bold;
}
h3 {
  margin-top: 5px;
  font-size: 16px;
  color: #ffffff;
}
</style>