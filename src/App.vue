<script setup lang="ts">
import { RouterView } from "vue-router";
import AppHeader from "./components/layout/AppHeader.vue";
import AppFooter from "./components/layout/AppFooter.vue";
</script>

<template>
  <div class="wrap">
    <AppHeader class="app-header" />
    <RouterView />
    <AppFooter class="app-footer" />
  </div>
</template>

<style scoped lang="scss">
.wrap {
  width: 100%;
  max-width: max(80vw, 300px);
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
}

.app-header {
  margin-bottom: 3rem;
}

.app-footer {
  margin-top: 3rem;
}
</style>
