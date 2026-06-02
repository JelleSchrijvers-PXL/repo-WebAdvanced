<script setup>
import { onMounted, ref } from 'vue';
import { useHardwareStore } from '../stores/hardwareStore';
import HardwareComponent from '@/comonents/HardwareComponent.vue'
const store = useHardwareStore();
const geselecteerdeBoodschap = ref('');

onMounted(() => {
  store.getData();
});

const toonSelectie = (hardware) => {
  geselecteerdeBoodschap.value = `Je selecteerde - ${hardware.naam} - die tot de categorie - ${hardware.categorie} behoort.`;
};
</script>

<template>
  <div>
    <h2 class="view-title">Hardware Componenten Overzicht</h2>

    <div v-if="geselecteerdeBoodschap" class="info-bar">
      <span>💡 {{ geselecteerdeBoodschap }}</span>
      <button @click="geselecteerdeBoodschap = ''">X</button>
    </div>

    <div class="grid-container">
      <HardwareComponent
          v-for="item in store.hardwareLijst"
          :key="item.id"
          :componentData="item"
          @afbeeldingGeselecteerd="toonSelectie"
      />
    </div>
  </div>
</template>

<style scoped>
.view-title {
  margin-bottom: 25px;
  color: #ffffff;
  border-left: 4px solid #4ea8de;
  padding-left: 10px;
}
.info-bar {
  background-color: #3a506b;
  border: 1px solid #4ea8de;
  color: #ffffff;
  padding: 15px 20px;
  border-radius: 8px;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  animation: fadeIn 0.3s ease;
}
.info-bar button {
  background: none;
  border: none;
  color: #ff3333;
  font-weight: bold;
  cursor: pointer;
}
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 30px;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
