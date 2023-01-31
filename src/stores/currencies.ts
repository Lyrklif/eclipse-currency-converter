import { defineStore } from "pinia";
import type { RemovableRef } from "@vueuse/core";
import { ref, computed } from "vue";
import fx from "money";

export interface StoreInterface {
  currentCurrency: RemovableRef<string>;
  currencyList: RemovableRef<Array<string>>;
  exchangeRates: RemovableRef<Array<any>>;
  filteredExchangeRates: RemovableRef<Array<any>>;
  setCurrentCurrency: (value: string) => void;
  setCurrencyVariants: (list: Array<string>) => void;
  setExchangeRates: (list: Array<any>) => void;
  loadCurrencies: () => Promise<void>;
  loadRates: () => Promise<void>;
  searchName: RemovableRef<string>;
  setSearchName: (value: string) => void;
  resetSearchName: () => void;
}

export const useCurrenciesStore = defineStore(
  "currencies",
  (): StoreInterface => {
    const currentCurrency = ref("");
    const searchName = ref("");
    const currencyList = ref<Array<string>>([]);
    const exchangeRates = ref<Array<any>>([]);

    const filteredExchangeRates = computed(() => {
      const name = searchName.value.toLowerCase();

      return exchangeRates.value.filter((item) => {
        return (
          item.CharCode.toLowerCase().includes(name) ||
          item.Name.toLowerCase().includes(name)
        );
      });
    });

    function setSearchName(value: string): void {
      searchName.value = value;
    }
    function resetSearchName(): void {
      searchName.value = "";
    }

    function setCurrencyVariants(list: Array<string> = []): void {
      currencyList.value = list;
    }

    function setExchangeRates(list: Array<any>): void {
      exchangeRates.value = list;
    }

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

    async function loadCurrencies(): Promise<void> {
      fetch("https://www.cbr-xml-daily.ru/daily_json.js")
        .then((response) => response.json())
        .then((data) => {
          setExchangeRates(Object.values(data.Valute));
        })
        .catch((error) => {
          console.error(error.response);
        });
    }

    async function loadRates(): Promise<void> {
      fetch("https://www.cbr-xml-daily.ru/latest.js")
        .then((response) => response.json())
        .then((data) => {
          const variants = { ...data.rates, [data.base]: 1 };
          fx.rates = variants;
          fx.base = data.base;
          setCurrentCurrency(data.base);
          setCurrencyVariants(Object.keys(variants));
        })
        .catch((error) => {
          console.error(error.response);
        });
    }

    return {
      currentCurrency,
      currencyList,
      exchangeRates,
      filteredExchangeRates,
      searchName,
      setCurrencyVariants,
      setExchangeRates,
      setCurrentCurrency,
      loadCurrencies,
      loadRates,
      setSearchName,
      resetSearchName,
    };
  }
);
