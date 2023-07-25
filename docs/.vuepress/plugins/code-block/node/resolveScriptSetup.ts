import type { Page } from '@vuepress/core'

const scriptRegExp = /<script\s(.*\s)?setup(\s.*)?>([\s\S]*)<\/script>/

export const resolveScriptSetup = (
  page: Page,
  store: Map<string, Map<string, string>>
) => {
  const deps = store.get(page.filePath!)
  if (!deps) return

  page.sfcBlocks.scriptSetup ??= {} as any
  // 如果在页面中写了 `script setup` 提取内容，往里追加组件导入的代码，在重写回去。
  let original = page.sfcBlocks.scriptSetup?.content || ''
  if (original.trim().startsWith('<script')) {
    original = original.match(scriptRegExp)?.[3] ?? ''
  }

  // 根据缓存中存储的组件路径导入组件，组件名称和生成节点时的规则一致。
  ;(page.sfcBlocks.scriptSetup as any).content = combineScriptSetup(
    [...deps.entries()],
    original
  )
}

export const combineScriptSetup = (deps: string[][], original: string) => {
  return `\n
<script lang="ts" setup>
  ${deps
    .map(([hash, path]) => `import CodeDemo${hash} from '${path}'`)
    .join('\n')}

  ${original}\n
</script>\n`
}
