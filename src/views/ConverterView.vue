<script lang="ts" setup>
import { useConverterStore } from "../stores/converter";
import { useCurrenciesStore } from "../stores/currencies";
import BaseSelect from "../components/features/BaseSelect.vue";
import { storeToRefs } from "pinia";

const convertStore = useConverterStore();
const currenciesStore = useCurrenciesStore();
const { baseValue } = storeToRefs(convertStore);

const changeValue = (e: any) => {
  convertStore.setBaseValue(e.target.value);
};
</script>

<template>
  <main>
    <input
      type="number"
      inputmode="numeric"
      v-model.number="baseValue"
      @input="changeValue"
      min="0"
    />
    <BaseSelect
      :value="convertStore.from"
      :options="currenciesStore.currencyList"
      @change="convertStore.setFrom"
    />

    <button @click="convertStore.switchCurrencies">{{ "<=>" }}</button>

    <input
      type="number"
      inputmode="numeric"
      disabled
      v-model.number="convertStore.calculateValue"
    />
    <BaseSelect
      :value="convertStore.to"
      :options="currenciesStore.currencyList"
      @change="convertStore.setTo"
    />
  </main>
</template>
