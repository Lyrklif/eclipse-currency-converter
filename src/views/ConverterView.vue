<script lang="ts" setup>
import { ref } from "vue";
import { useCurrenciesStore } from "../stores/currencies";
import LoadingAlert from "../components/features/alert/LoadingAlert.vue";
import FetchAlert from "../components/features/alert/FetchAlert.vue";
import CurrencyConverter from "../components/features/CurrencyConverter.vue";

const isLoading = ref<boolean>(true);
const isError = ref<boolean>(false);

const currenciesStore = useCurrenciesStore();

currenciesStore
  .loadRates()
  .catch(() => {
    isError.value = true;
  })
  .finally(() => {
    isLoading.value = false;
  });
</script>

<template>
  <main>
    <LoadingAlert v-if="isLoading" />
    <FetchAlert v-else-if="isError" />
    <CurrencyConverter v-else />
  </main>
</template>
