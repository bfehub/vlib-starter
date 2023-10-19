import type {
  ReComponentName,
  ReDocUrl,
  ReAttribute,
  ReWebTypesSource,
} from 'components-helper'
import helper from 'components-helper'
import { relative } from 'path'
import { output, compRoot, compPackage } from '../utils/paths'
import { PKG_NAME, PKG_CAMELCASE_NAME } from '../utils/constants'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { version } = require(compPackage)

/**
 * 重写组件名称
 * @example BackTop -> vlib-back-top
 */
const reComponentName: ReComponentName = (title) => {
  return `${PKG_NAME}-${title
    .replace(/\B([A-Z])/g, '-$1')
    .replace(/[ ]+/g, '-')
    .toLowerCase()}`
}

/**
 * 重写文档路径
 * @example src/back-top/README.md -> https://bfehub.github.io/vlib-starter/components/
 */
const reDocUrl: ReDocUrl = (_, header, path) => {
  const docs = 'https://bfehub.github.io/vlib-starter/components/'
  const name = relative(compRoot, path!)?.split('/')[0].replace(/-/g, '') + '/'
  const attr = header ? header.replace(/[ ]+/g, '-').toLowerCase() : undefined
  return docs + name + (attr ? '#' + attr : '')
}

/**
 * 重写组件属性
 * @example v-model -> model-value
 */
const reAttribute: ReAttribute = (value) => {
  switch (value) {
    case '':
    case '-':
    case '—':
      return undefined
    case 'v-model':
      return 'model-value'
    default:
      return value
  }
}

/**
 * 重写 web-types 来源
 * @example BackTop -> VlibBackTop
 */
const reWebTypesSource: ReWebTypesSource = (title: string) => {
  const symbol = `${PKG_CAMELCASE_NAME}${title
    .replace(/-/, ' ')
    .replace(/^\w|\s+\w/g, (item) => item.trim().toUpperCase())}`

  return { symbol }
}

export const generateHelper = async () => {
  await helper({
    // 基本配置
    name: PKG_NAME,
    version,
    entry: `${compRoot}/**/*.md`,
    outDir: output,
    space: 2,

    // 解析配置
    reComponentName,
    reDocUrl,
    reAttribute,
    reWebTypesSource,

    // 表头配置
    propsName: '属性',
    propsDescription: '说明',
    propsType: '类型',
    propsOptions: '可选值',
    propsDefault: '默认值',

    eventsName: '事件名',
    eventsDescription: '说明',

    slotsName: '插槽名',
    slotsDescription: '说明',
  })
}
