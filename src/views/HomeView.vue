<script lang="ts" setup>
import CurrencyChanger from "../components/features/CurrencyChanger.vue";
import SearchCurrency from "../components/features/SearchCurrency.vue";
import ExchangeRates from "../components/features/rates/ExchangeRates.vue";
import LoadingAlert from "../components/features/alert/LoadingAlert.vue";
import FetchAlert from "../components/features/alert/FetchAlert.vue";
import { useCurrenciesStore } from "../stores/currencies";
import { ref } from "vue";

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
  <main>
    <LoadingAlert v-if="isLoading" />
    <FetchAlert v-else-if="isError" />

    <div v-else>
      <div class="actions">
        <CurrencyChanger />
        <SearchCurrency class="search" />
      </div>
      <ExchangeRates />
    </div>
  </main>
</template>

<style scoped lang="scss">
.actions {
  margin-bottom: 2rem;
  display: flex;
}

.search {
  width: 100%;
}
</style>
