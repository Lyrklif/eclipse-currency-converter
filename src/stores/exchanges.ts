import { defineStore } from "pinia";
import type { RemovableRef } from "@vueuse/core";
import { ref, computed } from "vue";
import fx from "money";
import API from "../api/index";
import type { ExchangeInterface } from "../api/types";
import { useSearchStore } from "./search";
import { BASE_CURRENCY } from "../constants";

export interface StoreInterface {
  currentCurrency: RemovableRef<string>;
  loadExchanges: () => Promise<void>;
  filteredExchanges: RemovableRef<Array<ExchangeInterface>>;
  setCurrentCurrency: (value: string) => void;
}

export const useExchangesStore = defineStore(
  "exchanges",
  (): StoreInterface => {
    const currentCurrency = ref(BASE_CURRENCY);
    const exchangeRates = ref<Array<ExchangeInterface>>([]);
    const searchStore = useSearchStore();

    const convertedExchanges = computed(() => {
      if (currentCurrency.value === BASE_CURRENCY) {
        return exchangeRates.value;
      }

      return exchangeRates.value.map((item) => {
        const currency = currentCurrency.value;
        return {
          ...item,
          Value: fx(item.Value).from(BASE_CURRENCY).to(currency),
          Previous: fx(item.Previous).from(BASE_CURRENCY).to(currency),
        };
      });
    });

    const filteredExchanges = computed(() => {
      const name = searchStore.searchName.toLowerCase();

      return convertedExchanges.value.filter((item) => {
        return (
          item.CharCode.toLowerCase().includes(name) ||
          item.Name.toLowerCase().includes(name)
        );
      });
    });

    function setCurrentCurrency(currency: string): void {
      currentCurrency.value = currency;
    }

    async function loadExchanges() {
      try {
        const res = await API.exchanges();
        exchangeRates.value = Object.values(res.data.Valute);
      } catch (e: any) {
        console.error(e.response);
      }
    }

    return {
      currentCurrency,
      filteredExchanges,
      setCurrentCurrency,
      loadExchanges,
    };
  }
);
