<script lang="ts" setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>

<template>
  <footer class="footer footer-center bg-base-300 text-base-content p-4">
    <aside>
      <p>Copyright © {{ currentYear }} - All right reserved by BookApp</p>
    </aside>
  </footer>
</template>
