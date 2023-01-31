<script lang="ts" setup>
import CurrencyChanger from "../components/features/CurrencyChanger.vue";
import { useCurrenciesStore } from "../stores/currencies";

const store = useCurrenciesStore();
</script>

<template>
  <div>
    <CurrencyChanger />

    <table>
      <thead>
        <tr>
          <th>CharCode</th>
          <th>Nominal</th>
          <th>Name</th>
          <th>Value</th>
          <th>Previous</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(value, key) in store.exchangeRates" :key="key">
          <td>{{ value.CharCode }}</td>
          <td>{{ value.Nominal }}</td>
          <td>{{ value.Name }}</td>
          <td>{{ value.Value }}</td>
          <td>{{ value.Previous }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
