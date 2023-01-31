<script lang="ts" setup>
import type { PropType } from "vue";

type AlertTypes = "error" | "info";

defineProps({
  text: { type: String, default: "" },
  type: { type: String as PropType<AlertTypes>, default: "info" },
});
</script>

<template>
  <div
    class="alert"
    :class="{
      error: type === 'error',
      info: type === 'info',
    }"
  >
    <p class="text">{{ text }}</p>
  </div>
</template>

<style scoped lang="scss">
.alert {
  padding: 1rem 0.5rem;
  border-radius: 1rem;
  border-style: solid;
  border-width: 1px;

  &.info {
    color: cornflowerblue;
    border-color: cornflowerblue;
  }

  &.error {
    color: indianred;
    border-color: indianred;
  }
}

.text {
  margin-top: 0;
  margin-bottom: 0;
}
</style>
