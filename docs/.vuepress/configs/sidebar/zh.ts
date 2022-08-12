import type { SidebarConfig } from 'vuepress'

export const zh: SidebarConfig = {
  '/components': [
    {
      text: '基础组件',
      children: [
        {
          text: 'BackTop 回到顶部',
          link: '/../packages/ui/src/back-top/README.md',
        },
        {
          text: 'BackTopTsx 回到顶部',
          link: '/../packages/ui/src/back-top-tsx/README.md',
        },
      ],
    },
  ],
}
