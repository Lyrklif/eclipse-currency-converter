<script lang="ts" setup>
import type { PropType } from "vue";
import { computed } from "vue";

const props = defineProps({
  current: { type: Number as PropType<number>, required: true },
  previous: { type: Number as PropType<number>, required: true },
});

const isHigh = computed(() => {
  return props.current > props.previous;
});
const isLow = computed(() => {
  return props.current < props.previous;
});
</script>

<template>
  <td>
    <b
      class="value price"
      :class="{
        high: isHigh,
        low: isLow,
      }"
      >{{ isHigh ? "▼" : isLow ? "▲" : "" }} {{ $filters.number(current) }}</b
    >
    <small class="price">
      {{ isHigh ? "-" : isLow ? "+" : "" }}
      {{ $filters.number(Math.abs(current - previous)) }}
    </small>
  </td>
</template>

<style scoped lang="scss">
.price {
  font-family: monospace;
}

.value {
  display: block;

  &.high {
    color: green;
  }

  &.low {
    color: indianred;
  }
}
</style>
