<script setup lang="ts">
import { ref } from "vue";
import { useCurrenciesStore } from "../../stores/currencies";

const store = useCurrenciesStore();
const currency = ref(store.currentCurrency);

const changeHandler = (): void => {
  store.setCurrentCurrency(currency.value);
};
</script>

<template>
  <select v-model="currency" @change="changeHandler">
    <option
      v-for="name in store.currencyList"
      :key="`currency-${name}`"
      :value="name"
    >
      {{ name }}
    </option>
  </select>
</template>
