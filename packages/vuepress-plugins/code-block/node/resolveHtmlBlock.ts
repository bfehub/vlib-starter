import type { Markdown, MarkdownEnv } from '@vuepress/markdown'
import { parseCodeBlock } from '.'

export function resolveHtmlBlock(
  md: Markdown,
  store: Map<string, Set<string>>
) {
  const rawRule = md.renderer.rules.html_block!

  // 扩展 html_block 渲染规则，保存原始的渲染规则处理完后再调用原始的渲染规则。
  md.renderer.rules.html_block = function (
    tokens,
    idx,
    opts,
    env: MarkdownEnv,
    self
  ) {
    const content = tokens[idx].content

    if (content.startsWith(`<demo`)) {
      tokens[idx].content = parseCodeBlock(store, content, env.filePath!)
    }

    return rawRule(tokens, idx, opts, env, self)
  }
}
