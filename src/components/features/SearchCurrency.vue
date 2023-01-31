<script setup lang="ts">
import { useSearchStore } from "../../stores/search";
import BaseInput from "../base/BaseInput.vue";
import { storeToRefs } from "pinia";

const store = useSearchStore();
const { searchName } = storeToRefs(store);

const changeHandler = (value: string): void => {
  store.setSearchName(value);
};
</script>

<template>
  <form @submit.prevent="changeHandler(searchName)">
    <BaseInput
      @input="changeHandler"
      :value="searchName"
      placeholder="Поиск валюты"
      type="search"
      class="input"
    />
  </form>
</template>

<style scoped lang="scss">
.input {
  width: 100%;
  max-width: 100%;
}
</style>
