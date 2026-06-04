/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'

  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '@/data/vakkendata.js' {
  export interface Vak {
    naam: string
    credits: number
    lector: string
  }

  export const mijnVakken: Vak[]
}
