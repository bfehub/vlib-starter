import { withInstall } from 'vant/es/utils'
import _BackTopTsx from './src/back-top-tsx'

export const BackTopTsx = withInstall(_BackTopTsx)
export default BackTopTsx

export type { BackTopTsxProps } from './src/props'

declare module 'vue' {
  export interface GlobalComponents {
    VlibBackTopTsx: typeof BackTopTsx
  }
}
