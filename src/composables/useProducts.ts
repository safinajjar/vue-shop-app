import { faker } from '@faker-js/faker'
import productsData from '@/data/products.json'
import type { Product } from '@/types/Product'

export const useProducts = () => {
  const generateProducts = (count: number = 10) => {
    return Array.from({ length: count }, () => {
      return {
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: faker.commerce.price(),
        image: faker.image.urlLoremFlickr({ width: 500, height: 200 }),
      }
    })
  }

  const getSavedProducts = (): Product[] => {
    return productsData
  }

  return {
    generateProducts,
    getSavedProducts,
  }
}