<script setup lang="ts">
import { RouterView } from "vue-router";
import AppHeader from "./components/layout/header/AppHeader.vue";
import AppFooter from "./components/layout/footer/AppFooter.vue";
import { useCurrenciesStore } from "./stores/currencies";

const store = useCurrenciesStore();
store.loadCurrencies();
store.loadRates();
</script>

<template>
  <div>
    <div>
      <AppHeader />

      <main>
        <RouterView />
      </main>
    </div>

    <AppFooter />
  </div>
</template>
