import { path } from '@vuepress/utils'
import { type Node, parser } from 'posthtml-parser'
import { render } from 'posthtml-render'
import { readSource } from '.'

export function parseCodeBlock(
  store: Map<string, Set<string>>,
  content: string,
  pagePath: string
): string {
  const html: Node[] = parser(content)

  let i = -1
  for (const node of html) {
    i++

    if (typeof node !== 'object') {
      continue
    }

    if (node.tag !== 'demo') {
      continue
    }

    if (typeof node.attrs?.src !== 'string') {
      continue
    }

    // 当前页面引用的外部添加进缓存，页面扩展时使用
    const dirPath = path.dirname(pagePath)
    const compPath = path.resolve(dirPath, node.attrs?.src)
    if (!store.has(pagePath)) store.set(pagePath, new Set())
    store.get(pagePath)?.add(compPath)

    // 读取文件，生成新的标签结构。
    // tag: 节点的名称，在 vue 文件中是组件名。
    // attrs: 节点的属性，在 vue 文件中是 props 属性。
    // content: 子节点，在 vue 文件中用 slot 渲染。
    const source = readSource(compPath)
    html[i] = {
      tag: 'VlibDemo',
      attrs: {
        name: source.name,
        rawCode: encodeURIComponent(source.rawCode),
        highlightCode: encodeURIComponent(source.highlightCode),
      },
      content: [
        {
          tag: `VlibDemo${store.get(pagePath)?.size}`,
        },
      ],
    }
  }

  return render(html)
}
