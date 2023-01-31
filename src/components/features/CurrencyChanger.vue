<script setup lang="ts">
import { useCurrenciesStore } from "../../stores/currencies";
import BaseSelect from "../base/BaseSelect.vue";
import { storeToRefs } from "pinia";

const store = useCurrenciesStore();
const { currentCurrency } = storeToRefs(store);

const changeHandler = (value: string): void => {
  store.setCurrentCurrency(value);
};
</script>

<template>
  <BaseSelect
    :value="currentCurrency"
    :options="store.currencyList"
    @change="changeHandler"
  />
</template>
