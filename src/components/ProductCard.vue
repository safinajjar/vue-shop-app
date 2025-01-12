<script lang="ts" setup>
import type { Product } from '@/types/Product'

defineProps<{
  products: Product[]
}>()
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <routerLink
      v-for="product in products"
      :key="product.id"
      class="card card-compact card-bordered bg-base-100 shadow-md"
      :to="{ name: 'product', params: { id: product.id } }"
    >
      <figure>
        <img :src="product.image" :alt="product.name" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{{ product.name }}</h2>
        <p>${{ product.price }}</p>
        <p>{{ product.description }}</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </routerLink>
  </div>
</template>
