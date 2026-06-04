<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const exitGame = () => {
  router.push("/");
};
</script>

<template>
  <div class="fullscreen">
    <button class="exit-btn" @click="exitGame">Exit</button>

    <RouterView />
  </div>
</template>

<style scoped>
.fullscreen {
  height: 100vh;
  width: 100vw;
  background: black;
}

.exit-btn {
  position: absolute;
  background: maroon;
  top: 10px;
  right: 10px;
}
</style>