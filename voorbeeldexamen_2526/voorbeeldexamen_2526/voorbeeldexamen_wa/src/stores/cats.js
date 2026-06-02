import { defineStore } from 'pinia'

export const useCatsStore = defineStore('cats', () => {
  const cats = [
    { id: 1, name: 'Abyssinian', price: 180, imgPath: 'abyssinian.jpg' },
    { id: 2, name: 'Maine Coon', price: 800, imgPath: 'maine-coon.jpg' },
    { id: 3, name: 'Ragdoll', price: 300, imgPath: 'ragdoll.jpg' },
    {
      id: 4,
      name: 'British Shorthair',
      price: 1200,
      imgPath: 'british-shorthair.jpg',
    },
  ]
  return { cats }
})
