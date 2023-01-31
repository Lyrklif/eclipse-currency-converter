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
      API.rates()
        .then((res) => {
          const variants = { ...res.data.rates, [res.data.base]: 1 };
          fx.rates = variants;
          fx.base = res.data.base;
          setCurrencyKeys(Object.keys(variants));
        })
        .catch((error) => {
          console.error(error.response);
        });
    }

    return {
      currencyKeys,
      setCurrencyKeys,
      loadRates,
    };
  }
);
