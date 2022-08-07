import { defineUserConfig, defaultTheme } from 'vuepress'
import * as navbar from './configs/navbar'
import * as sidebar from './configs/sidebar'

export default defineUserConfig({
  base: '/vlib-starter/',

  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'vlib-starter',
      description: 'Vue3 组件库开发模板 & Vue3 组件库实践指南',
    },
  },

  theme: defaultTheme({
    logo: '/images/hero.png',

    repo: 'https://github.com/bfehub/vlib-starter',

    locales: {
      '/': {
        navbar: navbar.zh,
        sidebar: sidebar.zh,
        selectLanguageName: '简体中文',
        selectLanguageText: '选择语言',
        selectLanguageAriaLabel: '选择语言',
      },
    },
  }),
})
