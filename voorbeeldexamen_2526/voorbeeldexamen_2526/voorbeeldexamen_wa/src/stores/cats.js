import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useCatsStore = defineStore('cats', () => {
  const cats = ref([
    { id: 1, name: 'Abyssinian', price: 180, imgPath: 'abyssinian.jpg' },
    { id: 2, name: 'Maine Coon', price: 800, imgPath: 'maine-coon.jpg' },
    { id: 3, name: 'Ragdoll', price: 300, imgPath: 'ragdoll.jpg' },
    {
      id: 4,
      name: 'British Shorthair',
      price: 1200,
      imgPath: 'british-shorthair.jpg',
    },
  ])

  const averagePrice = computed(() => {
    if (cats.value.length === 0) {
      return 0
    }

    const totalPrice = cats.value.reduce((total, cat) => total + cat.price, 0)
    return totalPrice / cats.value.length
  })

  function adoptCat(catId) {
    cats.value = cats.value.filter((cat) => cat.id !== catId)
  }

  return { cats, averagePrice, adoptCat }
})
