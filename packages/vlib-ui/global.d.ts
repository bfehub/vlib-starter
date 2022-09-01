export {}

// Helper for Volar
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    VlibBackTop: typeof import('@bfehub/vlib-ui')['BackTop']
    VlibBackTopTsx: typeof import('@bfehub/vlib-ui')['BackTopTsx']
  }
}
