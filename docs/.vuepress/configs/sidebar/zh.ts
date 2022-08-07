import type { SidebarConfig } from 'vuepress'

export const zh: SidebarConfig = {
  '/components': [
    {
      text: '基础组件',
      children: [
        {
          text: 'Image 图片',
          link: '/components/image/README.md',
        },
        {
          text: 'BackTop 回到顶部',
          link: '/components/back-top/README.md',
        },
      ],
    },
  ],
}
