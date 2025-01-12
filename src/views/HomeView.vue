<script setup lang="ts">
import ProductCard from '@/components/ProductCard.vue'
import { useProducts } from '@/composables/useProducts'
import type { Product } from '@/types/Product'
import { ref } from 'vue'

const { getSavedProducts } = useProducts()

const products = ref<Product[]>(getSavedProducts())
</script>

<template>
  <ProductCard :products />
</template>
