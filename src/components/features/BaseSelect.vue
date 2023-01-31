<script setup lang="ts">
import type { PropType } from "vue";
import { ref } from "vue";

const emit = defineEmits(["change"]);
const selected = ref<string>("");

defineProps({
  value: { type: String as PropType<string>, required: true },
  options: { type: Array as PropType<Array<string>>, required: true },
});

const changeHandler = (e: any) => {
  emit("change", e.target.value);
};
</script>

<template>
  <select v-model="selected" :value="value" @change="changeHandler">
    <option v-for="name in options" :key="`select-${name}`" :value="name">
      {{ name }}
    </option>
  </select>
</template>
