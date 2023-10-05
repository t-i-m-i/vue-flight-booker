<script setup>

import { ref, computed } from 'vue';
import { dateToString, stringToDate } from '../utils/utils.js';

const flightType = ref('one-way flight');
const departureDate = ref(dateToString(new Date()));
const returnDate = ref(departureDate.value);

const isReturn = computed(() => flightType.value === 'return flight');
const canBook = computed(() => !isReturn.value || stringToDate(returnDate.value) > stringToDate(departureDate.value));

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
    <input :disabled="!isReturn" name="returnDate" type="date" v-model="returnDate">
    <button :disabled="!canBook" @click="book">Book</button>

    <p v-if="!canBook">
      Return date must be after departure date.
    </p>
</template>

<style lang="scss" scoped>
input,
select {
    display: block;
    font-size: 16px;
    margin: 0.5em;
}
p {
  color: tomato;
}
</style>