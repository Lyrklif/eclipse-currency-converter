<script setup lang="ts">
import { ref } from "vue";
import { RouterView } from "vue-router";
import AppHeader from "./components/layout/header/AppHeader.vue";
import AppFooter from "./components/layout/footer/AppFooter.vue";
import { useCurrenciesStore } from "./stores/currencies";

const store = useCurrenciesStore();
const isLoading = ref<boolean>(true);
const isError = ref<boolean>(false);

Promise.all([store.loadCurrencies(), store.loadRates()])
  .catch(() => {
    isError.value = true;
  })
  .finally(() => {
    isLoading.value = false;
  });
</script>

<template>
  <div>
    <AppHeader />

    <p v-if="isLoading">Loading...</p>
    <p v-else-if="isError">
      Не удалось загрузить данные. Попробуйте ещё раз через некоторое время
    </p>
    <RouterView v-else />

    <AppFooter />
  </div>
</template>
