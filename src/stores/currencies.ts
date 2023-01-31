import { defineStore } from "pinia";
import type { RemovableRef } from "@vueuse/core";
import { ref, computed } from "vue";
import fx from "money";
import API from "../api/index";
import type { ExchangeInterface } from "../api/types";
import { useSearchStore } from "./search";

export interface StoreInterface {
  currencyList: RemovableRef<Array<string>>;
  setCurrencyVariants: (list: Array<string>) => void;
  loadRates: () => Promise<void>;
}

export const useCurrenciesStore = defineStore(
  "currencies",
  (): StoreInterface => {
    const currencyList = ref<Array<string>>([]);

    function setCurrencyVariants(list: Array<string> = []): void {
      currencyList.value = list;
    }

    async function loadRates() {
      API.rates()
        .then((res) => {
          const variants = { ...res.data.rates, [res.data.base]: 1 };
          fx.rates = variants;
          fx.base = res.data.base;
          setCurrencyVariants(Object.keys(variants));
        })
        .catch((error) => {
          console.error(error.response);
        });
    }

    return {
      currencyList,
      setCurrencyVariants,
      loadRates,
    };
  }
);
