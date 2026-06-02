<script setup>
import { onMounted } from 'vue';
import { useHardwareStore } from '../stores/hardwareStore';
import HardwareReviewComponent from '@/comonents/HardwareReviewComponent.vue'

const store = useHardwareStore();

onMounted(() => {
  store.getData();
});
</script>

<template>
  <div>
    <h2 class="view-title">Hardware Reviews & Feedback</h2>
    <div class="grid-container">
      <HardwareReviewComponent
          v-for="item in store.hardwareLijst"
          :key="item.id"
          :componentData="item"
      />
    </div>
  </div>
</template>

<style scoped>
.view-title {
  margin-bottom: 25px;
  color: #ffffff;
  border-left: 4px solid #5bc0be;
  padding-left: 10px;
}
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
}
</style>
