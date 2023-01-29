import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
import type { RemovableRef } from "@vueuse/core";

export interface InterfaceStore {
  currency: RemovableRef<string>;
  setLang: (currentLang: string) => void;
  setCurrency: (currentCurrency: string) => void;
}

export const useInterfaceStore = defineStore("settings", (): InterfaceStore => {
  const currency = useStorage("currency", 'RUB');

  function setCurrency(currentCurrency: string): void {
    currency.value = currentCurrency;
  }

  return { currency, setCurrency };
});
