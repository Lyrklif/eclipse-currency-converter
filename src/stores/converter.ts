import { defineStore } from "pinia";
import type { RemovableRef } from "@vueuse/core";
import { ref, computed } from "vue";
import fx from "money";
import { BASE_CURRENCY, DEFAULT_CONVERT_CURRENCY } from "../constants";

export interface StoreInterface {
  baseValue: RemovableRef<number | undefined>;
  calculateValue: RemovableRef<number>;
  from: RemovableRef<string>;
  to: RemovableRef<string>;
  setBaseValue: (value: number) => void;
  switchCurrencies: () => void;
  setFrom: (value: string) => void;
  setTo: (value: string) => void;
}

export const useConverterStore = defineStore(
  "converter",
  (): StoreInterface => {
    const baseValue = ref<number>();
    const from = ref<string>(BASE_CURRENCY);
    const to = ref<string>(DEFAULT_CONVERT_CURRENCY);

    const calculateValue = computed(() => {
      if (!baseValue.value) return 0;
      return fx(baseValue.value).from(from.value).to(to.value);
    });

    function switchCurrencies() {
      const oldFrom = from.value;
      const oldTo = to.value;

      from.value = oldTo;
      to.value = oldFrom;
    }

    function setBaseValue(value: number) {
      baseValue.value = value;
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
      from,
      to,
      setBaseValue,
      switchCurrencies,
      setFrom,
      setTo,
    };
  }
);
