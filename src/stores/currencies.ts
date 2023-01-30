import { defineStore  } from "pinia";
import type { RemovableRef } from "@vueuse/core";
import { ref } from 'vue'

export interface StoreInterface {
  currencyList: RemovableRef<Array<any>>;
  setCurrencyList: (currentCurrency: Array<any>) => void;
  loadCurrencies: () => Promise<void>;
}

export const useCurrenciesStore = defineStore("currencies", (): StoreInterface => {
  const currencyList = ref<Array<any>>([]);

  function setCurrencyList(list: Array<any> = []): void {
    currencyList.value = list;
  }

  async function loadCurrencies(): Promise<void> {
    fetch('https://www.cbr-xml-daily.ru/daily_json.js')
      .then(response => response.json())
      .then(data => {
        setCurrencyList(data.Valute)
      })
      .catch((error) => {
        console.error(error.response)
      })
  }

  return { currencyList, setCurrencyList, loadCurrencies };
});
