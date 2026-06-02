<script setup>
let array_data = [[7,8,9] ,[4,5,6], [1,2,3], [0,".","="]];
</script>

<template>
  <table>
    <tr v-for="(row, rowIndex) in array_data" :key="rowIndex">
      <td v-for="(item, colIndex) in row" :key="colIndex">
        <button>{{ item }}</button>
      </td>
    </tr>
  </table>
</template>

<style scoped>

</style>