import type { MixinsInterface } from "../helpers/filters";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $filters: MixinsInterface;
  }
}

export {};
