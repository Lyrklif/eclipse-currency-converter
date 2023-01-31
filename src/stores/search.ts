import { defineStore } from "pinia";
import type { RemovableRef } from "@vueuse/core";
import { ref } from "vue";

export interface StoreInterface {
  searchName: RemovableRef<string>;
  setSearchName: (value: string) => void;
  resetSearchName: () => void;
}

export const useSearchStore = defineStore("search", (): StoreInterface => {
  const searchName = ref("");

  function setSearchName(value: string): void {
    searchName.value = value;
  }
  function resetSearchName(): void {
    searchName.value = "";
  }

  return {
    searchName,
    setSearchName,
    resetSearchName,
  };
});
