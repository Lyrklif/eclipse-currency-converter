import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
import type { RemovableRef } from "@vueuse/core";

export interface StoreInterface {
  currency: RemovableRef<string>;
  setCurrency: (currentCurrency: string) => void;
}

export const useInterfaceStore = defineStore("settings", (): StoreInterface => {
  const currency = useStorage("currency", 'RUB');

  function setCurrency(currentCurrency: string): void {
    currency.value = currentCurrency;
  }

  return { currency, setCurrency };
});
