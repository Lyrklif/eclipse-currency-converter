<script lang="ts" setup>
import CurrencyChanger from "../components/features/CurrencyChanger.vue";
import { useCurrenciesStore } from "../stores/currencies";

const store = useCurrenciesStore();
</script>

<template>
  <div>Converter page</div>
</template>
