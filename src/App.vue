<script setup lang="ts">
import { RouterView } from "vue-router";
import AppHeader from "./components/layout/AppHeader.vue";
import AppFooter from "./components/layout/AppFooter.vue";
</script>

<template>
  <div class="wrap">
    <AppHeader class="app-header" />
    <RouterView class="content" />
    <AppFooter class="app-footer" />
  </div>
</template>

<style scoped lang="scss">
.wrap {
  width: 100%;
  max-width: max(80vw, 320px);
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.app-header {
  margin-bottom: 3rem;
}

.content {
  margin-bottom: 3rem;
  padding-left: 10px;
  padding-right: 10px;
}

.app-footer {
  margin-top: auto;
}
</style>
