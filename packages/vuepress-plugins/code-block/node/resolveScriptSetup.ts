import type { Page } from '@vuepress/core'

const scriptRegExp = /<script\s(.*\s)?setup(\s.*)?>([\s\S]*)<\/script>/

export const resolveScriptSetup = (
  page: Page,
  store: Map<string, Set<string>>
) => {
  const deps = store.get(page.filePath!)
  if (!deps) return

  let i = 0
  let original = ''
  // 如果在页面中写了 `script setup` 提取内容，往里追加组件导入的代码，在重写回去。
  for (const tag of page.sfcBlocks) {
    if (tag.trim().startsWith('<script')) {
      original = tag.match(scriptRegExp)?.[3] ?? ''
      break
    }

    i++
  }

  // 根据缓存中存储的组件路径导入组件，组件名称和生成节点时的规则一致。
  page.sfcBlocks[i] = combineScriptSetup([...deps], original)
}

export const combineScriptSetup = (deps: string[], original: string) => {
  return `\n
<script lang="ts" setup>
  ${deps
    .map((path, index) => `import CodeDemo${index + 1} from '${path}'`)
    .join('\n')}

  ${original}\n
</script>\n`
}
