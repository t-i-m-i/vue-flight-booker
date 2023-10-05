<script setup>

import { ref } from 'vue';
const flightType = ref('one-way flight');
const departureDate = ref();
const returnDate = ref();

function book() {
    console.log('You are booking ', flightType.value);
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