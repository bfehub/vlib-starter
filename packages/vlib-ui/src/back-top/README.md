---
permalink: /components/backtop
---

# BackTop

返回页面顶部的操作按钮。

## 基础用法

通过滑动来查看容器右下角的按钮。

<demo src="./__demos__/basic.vue"></demo>

## 组件配置

### BackTop Props

| 属性              | 说明                             | 类型            | 默认值 |
| ----------------- | -------------------------------- | --------------- | ------ |
| target            | 触发滚动的对象                   | string          | window |
| visibility-height | 滚动高度达到此参数值才出现       | number / string | 200    |
| right             | 控制其显示位置，距离页面右边距   | number / string | 40     |
| bottom            | 控制其显示位置，距离页面底部距离 | number / string | 40     |

### BackTop Events

| 事件名 | 说明               | 参数                          |
| ------ | ------------------ | ----------------------------- |
| click  | 点击按钮触发的事件 | `(event: MouseEvent) => void` |

### BackTop Slots

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |

## 类型定义

组件导出以下类型定义

```ts
import type { BackTopProps } from '@bfehub/vlib-ui'
```

## 样式变量

组件提供了下列 CSS 变量，可用于自定义样式。

| 名称                       | 默认值 |
| -------------------------- | ------ |
| --vlib-back-top-right       | 40px   |
| --vlib-back-top-bottom      | 40px   |
| --vlib-back-top-button-size | 40px   |
