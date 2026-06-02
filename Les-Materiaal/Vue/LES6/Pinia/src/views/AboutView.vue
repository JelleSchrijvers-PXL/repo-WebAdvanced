<script setup>
import { useCounterStore } from "@/stores/counter";

const counterStore = useCounterStore();
</script>

<template>
  <div>
    <ul>
      <li v-for="item in counterStore.items" :key="item.id">{{item.woord}}</li>
    </ul>
    <p>Count: {{ counterStore.count }}</p>
    <p>Double Count: {{ counterStore.doubleCount }}</p>
    <button @click="counterStore.increment">Increment</button>
  </div>
</template>
