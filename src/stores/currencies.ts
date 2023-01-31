import { defineStore } from "pinia";
import type { RemovableRef } from "@vueuse/core";
import { ref } from "vue";
import { useStorage } from "@vueuse/core";

export interface StoreInterface {
  currentCurrency: RemovableRef<string>;
  currencyList: RemovableRef<Array<any>>;
  exchangeRates: RemovableRef<Array<string>>;
  setCurrentCurrency: (value: string) => void;
  setCurrencyVariants: (list: Array<string>) => void;
  setExchangeRates: (list: Array<any>) => void;
  loadCurrencies: () => Promise<void>;
}

export const useCurrenciesStore = defineStore(
  "currencies",
  (): StoreInterface => {
    const currentCurrency = useStorage("currency", "RUB");
    const currencyList = ref<Array<any>>([]);
    const exchangeRates = ref<Array<string>>([]);

    function setCurrencyVariants(list: Array<string> = []): void {
      currencyList.value = list;
    }

    function setExchangeRates(list: Array<any> = []): void {
      exchangeRates.value = list;
    }

    function setCurrentCurrency(value: string): void {
      currentCurrency.value = value;
    }

    async function loadCurrencies(): Promise<void> {
      fetch("https://www.cbr-xml-daily.ru/daily_json.js")
        .then((response) => response.json())
        .then((data) => {
          setExchangeRates(data.Valute);
          setCurrencyVariants(Object.keys(data.Valute));
        })
        .catch((error) => {
          console.error(error.response);
        });
    }

    return {
      currentCurrency,
      currencyList,
      exchangeRates,
      setCurrencyVariants,
      setExchangeRates,
      setCurrentCurrency,
      loadCurrencies,
    };
  }
);