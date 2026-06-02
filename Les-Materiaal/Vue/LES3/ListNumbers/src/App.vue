<script setup>
import {computed, reactive, ref} from 'vue'

const productprijzen =ref([
    {id:1, omschr:'brood', prijs: 3.50},
  {id:2, omschr:'HV Melk', prijs: 0.85},
  {id:3, omschr:'Tandpasta', prijs: 5.50},
  {id:4, omschr:'Bak bier', prijs: 30.00}
])

const filteredProducten = computed(() => {
  return productprijzen.value.filter(obj => obj.prijs > minPrijs.value)
})

let array_data = [[7,8,9] ,[4,5,6], [1,2,3], [0,".","="]]

const minPrijs = ref(0)
const waarde = ref("")
const history = ref([])

function clickButton(value) {
  if (value === "=") {
    if (waarde.value !== "") {
      history.value.push(waarde.value);
      waarde.value = "";
    }
  } else {
    waarde.value += value
  }
}
</script>

<template>
  <div class="wrapper">
    <div id="output_calculator" class="calculator">

      <!-- DISPLAY -->
      <div class="display">
        {{ waarde }}
      </div>

      <!-- BUTTONS -->
      <table>
        <tr v-for="(row, i) in array_data" :key="i">
          <td v-for="(item, j) in row" :key="j">
            <button
                class="btn"
                @click="clickButton(item)"
            >
              {{ item }}
            </button>
          </td>
        </tr>
      </table>
    </div>

    <!-- OUTPUT -->
    <div id="output_results" class="results">
      <ul>
        <li v-for="(item, i) in history" :key="i">
          {{ item }}
        </li>
      </ul>
    </div>

    <div id="output_producten" class="producten">
      <select v-model="minPrijs">
        <option :value="1">> 1€</option>
        <option :value="2">> 2€</option>
        <option :value="3">> 3€</option>
        <option :value="4">> 4€</option>
        <option :value="5">> 5€</option>
      </select>

      <ul>
        <li v-for="x in filteredProducten" :key="x.id">
          {{ x.omschr }} - €{{ x.prijs }}
        </li>
      </ul>
    </div>

  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  gap: 30px;
  justify-content: center;
  margin-top: 50px;
}

/* calculator */
.calculator {
  background: #1e1e1e;
  padding: 15px;
  border-radius: 12px;
}

/* display */
.display {
  height: 50px;
  margin-bottom: 10px;
  background: black;
  color: lime;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 10px;
  font-size: 20px;
  border-radius: 8px;
  font-family: monospace;
}

table {
  border-spacing: 10px;
}

.btn {
  width: 50px;
  height: 50px;
  font-size: 18px;
  border: none;
  border-radius: 8px;
  background: #333;
  color: white;
  cursor: pointer;
}

.btn:hover {
  background: #555;
}

/* results */
.results {
  background: #111;
  padding: 15px;
  border-radius: 12px;
  min-width: 120px;
  color: white;
}

.results ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.results li {
  padding: 8px;
  border-bottom: 1px solid #444;
  font-family: monospace;
}

.producten {
  background: #1a1a1a;
  padding: 15px;
  border-radius: 12px;
  color: white;
  min-width: 200px;
}

.producten select {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border-radius: 8px;
  border: none;
  background: #333;
  color: white;
}

.producten ul {
  list-style: none;
  padding: 0;
}

.producten li {
  padding: 8px;
  border-bottom: 1px solid #444;
}
</style>