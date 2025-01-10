<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <AppHeader />
  <main>
    <div class="container mx-auto px-3">
      <RouterView />
    </div>
  </main>
  <AppFooter />
</template>
