<script setup>
const emit = defineEmits(['toggle-status'])
const props = defineProps({
  taak: Object,
  index: Number,
})
const toggleStatus = () => {
  emit('toggle-status', props.index)
}
const removeTodo=() =>{
  emit('verwijder', props.index)
}
</script>

<template>
  <li :class="{ 'is-voltooid': taak.voltooid }">
    <input type="checkbox" :checked="taak.voltooid" @change="toggleStatus" />
    <span>{{ taak.tekst }}</span>
    <button @click="removeTodo">X</button>
  </li>
</template>

<style scoped>
li {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 5px;
}
.is-voltooid span {
  text-decoration: line-through;
  color: gray;
}
</style>
