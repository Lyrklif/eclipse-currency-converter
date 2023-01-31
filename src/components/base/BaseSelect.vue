<script setup lang="ts">
import type { PropType } from "vue";
import { ref, watch } from "vue";

const emit = defineEmits(["change"]);

const props = defineProps({
  value: { type: String as PropType<string>, required: true },
  options: { type: Array as PropType<Array<string>>, required: true },
});

const selected = ref<string>(props.value);

watch(
  () => props.value,
  () => {
    selected.value = props.value;
  }
);

const changeHandler = (e: any) => {
  emit("change", e.target.value);
};
</script>

<template>
  <select
    v-model="selected"
    :value="value"
    @change="changeHandler"
    class="select"
  >
    <option v-for="name in options" :key="`select-${name}`" :value="name">
      {{ name }}
    </option>
  </select>
</template>

<style scoped lang="scss">
.select {
  padding: 0.5rem;
}
</style>
