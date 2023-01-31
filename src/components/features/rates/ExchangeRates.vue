<script lang="ts" setup>
import PriceCell from "./PriceCell.vue";
import { useCurrenciesStore } from "../../../stores/currencies";

const store = useCurrenciesStore();
</script>

<template>
  <table class="table">
    <thead>
      <tr>
        <th>Код</th>
        <th class="price">Цена ({{ store.currentCurrency }})</th>
        <th>Номинал</th>
        <th>Название</th>
      </tr>
    </thead>

    <tbody>
      <tr
        v-for="value in store.filteredExchangeRates"
        :key="value.CharCode"
        class="row"
      >
        <td class="cell">
          <b>{{ value.CharCode }}</b>
        </td>
        <PriceCell
          :current="value.Value"
          :previous="value.Previous"
          class="cell price"
        />
        <td class="cell nominal">{{ value.Nominal }}</td>
        <td class="cell">{{ value.Name }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style>
.table {
  border-collapse: collapse;
  width: 100%;
}
.row {
  border-top: 1px solid lightgray;
}
.cell {
  padding: 0.5rem 0.1rem;
}

.nominal {
  text-align: center;
}

.price {
  text-align: right;
}
</style>
