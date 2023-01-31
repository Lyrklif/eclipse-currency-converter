<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useConverterStore } from "../../stores/converter";
import { useCurrenciesStore } from "../../stores/currencies";
import BaseInput from "../../components/base/BaseInput.vue";
import BaseSelect from "../../components/base/BaseSelect.vue";

const convertStore = useConverterStore();
const currenciesStore = useCurrenciesStore();
const { baseValue, calculateValue } = storeToRefs(convertStore);

const changeValue = (value: string) => {
  convertStore.setBaseValue(+value);
};
</script>

<template>
  <form @submit.prevent="changeValue(baseValue)" class="form">
    <div class="control-wrap">
      <BaseInput
        @input="changeValue"
        :value="baseValue"
        min="0"
        placeholder="0"
        type="number"
        inputmode="numeric"
      />

      <BaseSelect
        :value="convertStore.from"
        :options="currenciesStore.currencyList"
        @change="convertStore.setFrom"
      />
    </div>

    <button @click="convertStore.switchCurrencies" type="button" class="switch">
      ⇔
    </button>

    <div class="control-wrap">
      <BaseInput
        @input="changeValue"
        :value="calculateValue"
        disabled
        type="number"
        inputmode="numeric"
      />

      <BaseSelect
        :value="convertStore.to"
        :options="currenciesStore.currencyList"
        @change="convertStore.setTo"
      />
    </div>
  </form>
</template>

<style scoped lang="scss">
.form {
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }
}

.control-wrap {
  display: flex;
}

.switch {
  padding: 0.5rem 1rem;
  margin: 1rem;
  cursor: pointer;
}
</style>
