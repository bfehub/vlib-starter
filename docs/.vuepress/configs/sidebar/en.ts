import type { SidebarConfig } from 'vuepress'

export const en: SidebarConfig = {
  '/en/components': [
    {
      text: 'Base Components',
      children: [
        {
          text: 'Button',
          link: '/en/components/button/',
        },
        {
          text: 'BackTop',
          link: '/en/components/backtop/',
        },
        {
          text: 'BackTopTsx',
          link: '/en/components/backtoptsx/',
        },
      ],
    },
  ],
}
