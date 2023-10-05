<script setup>
  import { ref } from 'vue';
  const flightType = ref('one-way flight');
  
  function logValue() {
    console.log('flightType: ', flightType.value);
  }

  logValue();
</script>

<template>
  <select v-model="flightType" @change="logValue">
    <option value="one-way flight">One-way flight</option>
    <option value="return flight">Return flight</option>
  </select>
</template>

<style>
</style>