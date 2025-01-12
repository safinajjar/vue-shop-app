<script lang="ts" setup>
import { useProducts } from '@/composables/useProducts'
import type { Product } from '@/types/Product'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const { fetchProductById } = useProducts()
const product = ref<Product | null>(null)

onMounted(() => {
  product.value = fetchProductById(route.params.id.toString())
})
</script>

<template>
  <div class="container mx-auto mt-24">
    <!-- Main Product Section -->
    <div v-if="product" class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Product Image -->
      <div class="flex justify-center">
        <img :src="product.image" :alt="product.name" class="max-w-full rounded-lg" />
      </div>

      <!-- Product Info -->
      <div>
        <!-- Product Name -->
        <h1 class="text-2xl font-bold mb-2">{{ product.name }}</h1>

        <!-- Price -->
        <p class="text-xl text-primary font-semibold mb-4">${{ product.price }}</p>

        <!-- Product Description -->
        <p class="text-gray-700 mb-4">
          {{ product.description }}
        </p>

        <!-- Add to Cart -->
        <div class="flex gap-4 items-center">
          <button class="btn btn-primary">Add to Cart</button>
          <span class="text-gray-500">In Stock</span>
        </div>
      </div>
    </div>
  </div>
</template>
