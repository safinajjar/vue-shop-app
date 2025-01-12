<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <AppHeader />
    <main class="container mx-auto flex-grow">
      <RouterView />
    </main>
    <AppFooter />
  </div>
</template>
