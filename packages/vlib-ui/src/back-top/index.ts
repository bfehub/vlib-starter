import { withInstall } from 'vant/es/utils'
import _BackTop from './src/back-top.vue'

export const BackTop = withInstall(_BackTop)
export default BackTop

export type { BackTopProps } from './src/props'

declare module 'vue' {
  export interface GlobalComponents {
    VlibBackTop: typeof BackTop
  }
}
