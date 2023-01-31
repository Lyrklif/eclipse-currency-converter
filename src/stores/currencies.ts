import { defineStore } from "pinia";
import type { RemovableRef } from "@vueuse/core";
import { ref } from "vue";

export interface StoreInterface {
  currentCurrency: RemovableRef<string>;
  currencyList: RemovableRef<Array<any>>;
  exchangeRates: RemovableRef<any>;
  setCurrentCurrency: (value: string) => void;
  setCurrencyVariants: (list: Array<string>) => void;
  setExchangeRates: (list: Array<any>) => void;
  loadCurrencies: () => Promise<void>;
  loadRates: () => Promise<void>;
}

export const useCurrenciesStore = defineStore(
  "currencies",
  (): StoreInterface => {
    const currentCurrency = ref("");
    const currencyList = ref<Array<any>>([]);
    const exchangeRates = ref<any>({});

    function setCurrencyVariants(list: Array<string> = []): void {
      currencyList.value = list;
    }

    function setExchangeRates(value: any): void {
      exchangeRates.value = value;
    }

    function setCurrentCurrency(currency: string): void {
      const oldCurrency = currentCurrency.value;
      currentCurrency.value = currency;

      currencyList.value.forEach((key) => {
        const value = exchangeRates.value[key].Value;
        const previous = exchangeRates.value[key].Previous;

        // @ts-ignore
        const newValue = window.fx(value).from(oldCurrency).to(currency);
        // @ts-ignore
        const newPrevious = window.fx(previous).from(oldCurrency).to(currency);

        exchangeRates.value[key] = {
          ...exchangeRates.value[key],
          Value: newValue,
          Previous: newPrevious,
        };
      });
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

    async function loadRates(): Promise<void> {
      fetch("https://www.cbr-xml-daily.ru/latest.js")
        .then((response) => response.json())
        .then((data) => {
          // @ts-ignore
          window.fx.rates = data.rates;
          // @ts-ignore
          window.fx.base = data.base;
          setCurrentCurrency(data.base);
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
      loadRates,
    };
  }
);
