<script lang="ts" setup>
import CurrencyChanger from "../components/features/exchange/CurrencyChanger.vue";
import SearchCurrency from "../components/features/exchange/SearchCurrency.vue";
import ExchangeRates from "../components/features/exchange/ExchangeRates.vue";
import LoadingAlert from "../components/features/alert/LoadingAlert.vue";
import FetchAlert from "../components/features/alert/FetchAlert.vue";
import { useCurrenciesStore } from "../stores/currencies";
import { useExchangesStore } from "../stores/exchanges";
import { ref } from "vue";

const store = useCurrenciesStore();
const exchangesStore = useExchangesStore();
const isLoading = ref<boolean>(true);
const isError = ref<boolean>(false);

Promise.all([exchangesStore.loadExchanges(), store.loadRates()])
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
