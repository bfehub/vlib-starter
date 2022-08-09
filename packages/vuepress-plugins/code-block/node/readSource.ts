import { fs, path, warn } from '@vuepress/utils'
import { createMarkdown } from '@vuepress/markdown'
import { resolveHighlighter } from '@vuepress/plugin-prismjs'

export function readSource(filePath: string) {
  let code = ''
  const name = path.basename(filePath)
  const lang = path.extname(name).slice(1)

  if (fs.existsSync(filePath)) {
    code = fs.readFileSync(filePath, 'utf-8')
  } else {
    warn('找不到文件:' + path)
  }

  return {
    name,
    rawCode: code,
    highlightCode: createMarkdown({
      highlight: resolveHighlighter(lang),
    }).render('```' + lang + '\n' + code + '```'),
  }
}
