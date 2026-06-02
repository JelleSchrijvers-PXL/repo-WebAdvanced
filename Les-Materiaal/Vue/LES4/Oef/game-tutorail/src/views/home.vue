<script setup>
import router from "@/router/index.js";
</script>

<template>
<div class="home">
<div class="content">
  <div class="text">
    <h1>Monster Slayer</h1>

    <p>
      Welkom in het ultieme avontuur!<br />
      In dit spel bestrijd je gevaarlijke monsters en verzamel je kostbare
      schatten. Gebruik je strategie en kracht om te overleven in een donkere
      en mystieke wereld. Hoe verder je komt, hoe sterker je tegenstanders
      worden. Kun jij alle monsters verslaan en het einde van het spel
      bereiken? Het avontuur wacht op je!
    </p>

    <button class="btn" @click="router.push('/play')">
      Start tutorial
    </button>
  </div>

  <div class="image">
    <img src="../assets/startbestanden/monster_slayer.png" alt="monster slayer" />
  </div>
</div>
</div>
</template>

<style scoped>
.home {
  padding: 3rem;
}

/* layout */
.content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

/* tekst */
.text {
  max-width: 600px;
}

.text h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #222;
}

.text p {
  line-height: 1.6;
  color: #444;
  margin-bottom: 2rem;
}

/* knop */
.btn {
  background-color: #f00;
  color: white;
  border: none;
  padding: 0.8rem 1.6rem;
  font-size: 1rem;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.2s;
}

.btn:hover {
  background-color: #c00;
}

/* afbeelding */
.image img {
  max-width: 400px;
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

/* responsive */
@media (max-width: 768px) {
  .content {
    flex-direction: column;
    text-align: center;
  }

  .image img {
    max-width: 300px;
  }
}
</style>