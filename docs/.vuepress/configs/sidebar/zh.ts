import type { SidebarConfig } from 'vuepress'

export const zh: SidebarConfig = {
  '/components': [
    {
      text: '基础组件',
      children: [
        {
          text: 'Button 按钮',
          link: '/../packages/vlib-ui/src/button/README.md',
        },
      ],
    },
  ],
}
