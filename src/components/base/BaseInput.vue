<script setup lang="ts">
import type { PropType } from "vue";
import { ref, watch } from "vue";

const emit = defineEmits(["input"]);

const props = defineProps({
  value: {
    type: [String, Number] as PropType<string | number>,
    required: true,
  },
});

const model = ref<string | number>(props.value);

watch(
  () => props.value,
  () => {
    model.value = props.value;
  }
);

const changeHandler = () => {
  emit("input", model.value);
};
</script>

<template>
  <input v-model.trim="model" @input="changeHandler" class="input" />
</template>

<style scoped lang="scss">
.input {
  padding: 0.5rem;
}
</style>
