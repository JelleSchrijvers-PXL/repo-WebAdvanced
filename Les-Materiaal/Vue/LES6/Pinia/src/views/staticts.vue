<script setup>
import { useCounterStore} from "@/stores/counter.js";
import {ref} from "vue";
const counterStore = useCounterStore();
const newWord = ref('');
function voegToe() {
  counterStore.items.push({
    id: counterStore.items.length + 1, woord: newWord.value,
  });
}
</script>

<template>
  <div>
    <p>De waarde van de teller is momenteel: {{counterStore.count}}</p>
    <p>De dubbele waarde van de teller is momenteel: {{counterStore.count}}</p>
    <button @click="counterStore.increment">Increment</button>
    <p>In de array items zijn {{counterStore.items.length}} objecten aanwezig.</p>
  </div>
  <div>
    <label>Nieuw woord: <input type="text" v-model="newWord"/></label>
    <button @click="voegToe">VOEG TOE</button>
  </div>
</template>

<style scoped>

</style>
