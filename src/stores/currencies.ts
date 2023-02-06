import { defineStore } from "pinia";
import type { RemovableRef } from "@vueuse/core";
import { ref, computed } from "vue";
import fx from "money";
import API from "../api/index";

export interface StoreInterface {
  currencyKeys: RemovableRef<Array<string>>;
  setCurrencyKeys: (list: Array<string>) => void;
  loadRates: () => Promise<void>;
}

export const useCurrenciesStore = defineStore(
  "currencies",
  (): StoreInterface => {
    const currencyKeys = ref<Array<string>>([]);

    function setCurrencyKeys(list: Array<string> = []): void {
      currencyKeys.value = list;
    }

    async function loadRates() {
      try {
        const res = await API.rates();
        const variants = { ...res.data.rates, [res.data.base]: 1 };
        fx.rates = variants;
        fx.base = res.data.base;
        setCurrencyKeys(Object.keys(variants));
      } catch (e: any) {
        console.error(e.response);
      }
    }

    return {
      currencyKeys,
      setCurrencyKeys,
      loadRates,
    };
  }
);
