import { defineStore } from "pinia";
import type { RemovableRef } from "@vueuse/core";
import { ref, computed } from "vue";
import fx from "money";
import API from "../api/index";
import type { ExchangeInterface } from "../api/types";
import { useSearchStore } from "./search";

export interface StoreInterface {
  currentCurrency: RemovableRef<string>;
  loadCurrencies: () => Promise<void>;
  filteredExchangeRates: RemovableRef<Array<ExchangeInterface>>;
  setCurrentCurrency: (value: string) => void;
}

export const useExchangesStore = defineStore(
  "exchanges",
  (): StoreInterface => {
    const currentCurrency = ref("RUB");
    const exchangeRates = ref<Array<ExchangeInterface>>([]);
    const searchStore = useSearchStore();

    const filteredExchangeRates = computed(() => {
      const name = searchStore.searchName.toLowerCase();

      return exchangeRates.value.filter((item) => {
        return (
          item.CharCode.toLowerCase().includes(name) ||
          item.Name.toLowerCase().includes(name)
        );
      });
    });

    function setCurrentCurrency(currency: string): void {
      const oldCurrency = currentCurrency.value;
      currentCurrency.value = currency;

      exchangeRates.value.forEach((item) => {
        const value = item.Value;
        const previous = item.Previous;

        item.Value = fx(value).from(oldCurrency).to(currency);
        item.Previous = fx(previous).from(oldCurrency).to(currency);
      });
    }

    async function loadCurrencies() {
      API.exchanges()
        .then((data) => {
          exchangeRates.value = Object.values(data.data.Valute);
        })
        .catch((error) => {
          console.error(error.response);
        });
    }

    return {
      currentCurrency,
      filteredExchangeRates,
      setCurrentCurrency,
      loadCurrencies,
    };
  }
);
