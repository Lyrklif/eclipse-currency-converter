<script setup lang="ts">
import { useExchangesStore } from "../../stores/exchanges";
import { useCurrenciesStore } from "../../stores/currencies";
import BaseSelect from "../base/BaseSelect.vue";
import { storeToRefs } from "pinia";

const exchangesStore = useExchangesStore();
const currenciesStore = useCurrenciesStore();
const { currentCurrency } = storeToRefs(exchangesStore);

const changeHandler = (value: string): void => {
  exchangesStore.setCurrentCurrency(value);
};
</script>

<template>
  <BaseSelect
    :value="currentCurrency"
    :options="currenciesStore.currencyList"
    @change="changeHandler"
  />
</template>
