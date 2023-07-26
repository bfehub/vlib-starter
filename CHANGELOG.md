## 2.0.0 (2023-07-26)

<https://github.com/bfehub/vlib-starter/pull/13>

#### 代码规范

- prettier 升级到 3.x。
- stylelint 升级到 15.x。
- stylelint 15.x 开始弃用了样式相关的规则，所以不再需要 stylelint-config-prettier 解决冲突。

#### 打包工具

- rollup 升级到 3.x。
- vite 升级到 4.x。
- typescript 升级到 5.x。
- 打包时报 `__name is not defined` 错误临时 hack 的方式先处理。(tsx 与 vue3.4.x 一起使用的问题)。

```
// packages/vlib-ui/scripts/build/hack.js

// error: __name is not defined
// https://github.com/vuejs/core/issues/8303
// https://github.com/esbuild-kit/tsx/issues/242
const __defProp = Object.defineProperty
const __name = (target, value) =>
  __defProp(target, 'name', { value, configurable: true })
globalThis.__name = __name
```

#### 组件文档

- vuepress 升级到 2.beta.60。
- vuepress 中的 page.sfcBlock 接口定义改变，脚本补充到 page.sfcBlocks.scriptSetup 属性上。
- markdown 中的 demo 标签现在作为行内标签(md.renderer.rules.html_inline)解析。
- vuepress 2.beta.50 以后只加载 pure ESM 模块，为了避免还需要打包插件不再单独作为一个包开发。将 packages/vuepress-plugins 迁移到 docs/.vuepress/plugins 下。
