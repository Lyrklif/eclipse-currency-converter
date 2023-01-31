<script lang="ts" setup>
import ValueCell from "./ValueCell.vue";
import { useCurrenciesStore } from "../../stores/currencies";

const store = useCurrenciesStore();
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>CharCode</th>
        <th>Nominal</th>
        <th>Name</th>
        <th>Value</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="(value, key) in store.exchangeRates" :key="key">
        <td>{{ value.CharCode }}</td>
        <td>{{ value.Nominal }}</td>
        <td>{{ value.Name }}</td>
        <ValueCell :current="value.Value" :previous="value.Previous" />
      </tr>
    </tbody>
  </table>
</template>
