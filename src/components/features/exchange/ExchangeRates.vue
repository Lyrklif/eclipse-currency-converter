<script lang="ts" setup>
import PriceCell from "./PriceCell.vue";
import { useExchangesStore } from "../../../stores/exchanges";

const store = useExchangesStore();
</script>

<template>
  <table class="table">
    <thead class="thead">
      <tr>
        <th class="head-cell">Код</th>
        <th class="head-cell price">Цена ({{ store.currentCurrency }})</th>
        <th class="head-cell">Единиц</th>
        <th class="head-cell">Название</th>
      </tr>
    </thead>

    <tbody>
      <tr
        v-for="value in store.filteredExchanges"
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

.thead {
  position: sticky;
  top: 0;
  font-family: monospace;
  font-size: 0.9rem;
}

.head-cell {
  padding-top: 1rem;
  padding-bottom: 1rem;
  background-color: darkgray;
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
