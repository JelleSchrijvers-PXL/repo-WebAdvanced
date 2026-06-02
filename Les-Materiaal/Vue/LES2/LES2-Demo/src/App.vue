<script setup lang="ts">
import {ref, reactive} from "vue";

//functie implentaties
function getalVerhoog(){
  getal.value++;
}

function toonImage() {
  if(image.value === "../assets/hond.jpg"){
    image.value = "../assets/kat.jpg";
  }else{
    image.value = "../assets/hond.jpg"
  }
}

function waarde(){
  alert("De waarde van het getal is " + v_getal.value);
  v_getal.value = Math.floor(Math.random() * 101);
}

//variablen
const woord = ref(true);
const flag = ref(true);
const image = ref("../assets/hond.jpg");
const naam = ref('luc');
const getal =ref(1);
const v_getal =ref(0);
const persoonObj = reactive({
  id: 1,
  naam: 'luc',
  woonplaats: 'Hasselt',
  afbeelding: '../assets/jelle.png'
})

naam.value = 'Robin';

persoonObj.woonplaats = "Genk";

const link = ref("https://www.hbvl.be/")
const linkname = ref("Het belang van limburg");
</script>

<template>
  <p>deze tekst verandert dit <span @click="woord = !woord" :class="woord ? 'groen' : 'blauw'"> 'woord'</span> van kleur</p>
  <button @click="flag = !flag">Toggle</button>
  <p v-if = "flag">Deze tekst wordt getoond als die hieronder niet wordt getoond</p>
  <p v-else>Deze tekst wordt getoond als die hierboven niet wordt getoond</p>
  <hr>
  <h1>Goedemiddg {{ naam }}</h1>
  <hr>
    <p>
      {{ persoonObj.id }} - {{ persoonObj.naam }} - {{ persoonObj.woonplaats}}
    </p>
  <hr>
    <img :src="'../assets/' + persoonObj.afbeelding"/>
  <hr>
    <a v-bind:href="link">{{ linkname }}</a>
  <hr>
    <button @click="getalVerhoog">Getal ophogen</button>
    <p>de waarde van het getal is nu : {{ getal }}</p>
    <label>Getalwaarde (via input) : </label><input type="number" v-model="v_getal"><button @click="waarde()">?</button>
  <hr>
  <img :src="image" @mouseover="toonImage" @mouseout="toonImage"/>
</template>

<style scoped>
.groen {
  color: green;
}

.blauw {
  color: blue;
}

h1 {
  color: #2c3e50;
  text-align: center;
}

p {
  font-size: 18px;
  margin: 10px 0;
}

img {
  width: 200px;
  border-radius: 10px;
  display: block;
  margin: 10px auto;
}

a {
  color: blue;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #369f6e;
}
</style>