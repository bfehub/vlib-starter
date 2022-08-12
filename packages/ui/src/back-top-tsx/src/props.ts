import { makeNumericProp, makeStringProp } from 'vant/es/utils'
import type { ExtractPropTypes } from 'vue'

export const backTopTsxProps = {
  /**
   * 滚动高度达到此参数值才出现
   */
  visibilityHeight: makeNumericProp(200),
  /**
   * 触发滚动的对象
   */
  target: makeStringProp(''),
  /**
   * 控制其显示位置，距离页面右边距
   */
  right: makeNumericProp(''),
  /**
   * 控制其显示位置，距离页面底部距离
   */
  bottom: makeNumericProp(''),
}

export type BackTopTsxProps = ExtractPropTypes<typeof backTopTsxProps>
