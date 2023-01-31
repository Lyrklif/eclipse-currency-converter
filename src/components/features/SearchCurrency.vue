<script setup lang="ts">
import { useCurrenciesStore } from "../../stores/currencies";
import BaseInput from "../base/BaseInput.vue";
import { storeToRefs } from "pinia";

const store = useCurrenciesStore();
const { searchName } = storeToRefs(store);

const changeHandler = (value: string): void => {
  store.setSearchName(value);
};
</script>

<template>
  <BaseInput
    @input="changeHandler"
    :value="searchName"
    placeholder="Поиск валюты"
    type="search"
  />
</template>
