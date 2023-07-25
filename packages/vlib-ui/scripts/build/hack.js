// error: __name is not defined
// https://github.com/vuejs/core/issues/8303
// https://github.com/esbuild-kit/tsx/issues/242
const __defProp = Object.defineProperty
const __name = (target, value) =>
  __defProp(target, 'name', { value, configurable: true })
globalThis.__name = __name
