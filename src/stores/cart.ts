import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCart = defineStore('cart', () => {
  const result = ref<any>([])
  const payget = ref<any>([])
  const product = ref<any>([])
  return { result, payget, product }
})
