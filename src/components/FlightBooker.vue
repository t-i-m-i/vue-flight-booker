<script setup>

import { ref } from 'vue';
const flightType = ref('one-way flight');
const departureDate = ref(dateToString(new Date()));
const returnDate = ref(departureDate.value);

function dateToString(date) {
  return (
    date.getFullYear() +
    '-' +
    pad(date.getMonth() + 1) +
    '-' +
    pad(date.getDate())
  )
}

function pad(n, s = String(n)) {
  return s.length < 2 ? `0${s}` : s
}

function book() {
    console.log('You are booking', flightType.value);
    console.log('Your departure date: ', departureDate.value);
    console.log('Your return date: ', returnDate.value);
}
</script>

<template>
    <select name="flightType" v-model="flightType" @change="logValue">
        <option value="one-way flight">One-way flight</option>
        <option value="return flight">Return flight</option>
    </select>
    <input name="departureDate" type="date" v-model="departureDate">
    <input name="returnDate" type="date" v-model="returnDate">
    <button @click="book">Book</button>
</template>

<style lang="scss" scoped>
input,
select {
    display: block;
    font-size: 16px;
    margin: 0.5em;
}
</style>