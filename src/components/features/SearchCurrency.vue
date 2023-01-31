<script setup lang="ts">
import { ref } from "vue";
import { useCurrenciesStore } from "../../stores/currencies";

const store = useCurrenciesStore();
const value = ref(store.searchName);

const changeHandler = (): void => {
  store.setSearchName(value.value);
};
</script>

<template>
  <input
    v-model.trim="value"
    @input="changeHandler"
    placeholder="Поиск валюты"
  />
</template>
