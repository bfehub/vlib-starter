import { makeStringProp } from 'vant/es/utils'
import type { ExtractPropTypes } from 'vue'

export const <%= camelCaseName %>Props = {
  /**
   * 类型定义
   */
  type: makeStringProp(''),
}

export type <%= pascalCaseName %>Props = ExtractPropTypes<typeof <%= camelCaseName %>Props>
