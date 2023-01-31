import { defineStore } from "pinia";
import type { RemovableRef } from "@vueuse/core";
import { ref, computed } from "vue";
import fx from "money";

const START_VALUE = 0;

export interface StoreInterface {
  baseValue: RemovableRef<number>;
  calculateValue: RemovableRef<number>;
  setBaseValue: (value: number) => void;
  switchCurrencies: () => void;
  setFrom: (value: string) => void;
  setTo: (value: string) => void;
}

export const useConverterStore = defineStore(
  "converter",
  (): StoreInterface => {
    const baseValue = ref<number>(START_VALUE);
    const from = ref<string>("RUB");
    const to = ref<string>("USD");

    const calculateValue = computed(() => {
      return fx(baseValue.value).from(from.value).to(to.value);
    });

    function switchCurrencies() {
      const oldFrom = from.value;
      const oldTo = to.value;

      from.value = oldTo;
      to.value = oldFrom;
    }

    function setBaseValue(value: number) {
      baseValue.value = value || 0;
    }
    function setFrom(currencyName: string) {
      from.value = currencyName;
    }
    function setTo(currencyName: string) {
      to.value = currencyName;
    }

    return {
      baseValue,
      calculateValue,
      setBaseValue,
      switchCurrencies,
      setFrom,
      setTo,
    };
  }
);
