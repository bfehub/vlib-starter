import { defineUserConfig, defaultTheme, viteBundler } from 'vuepress'
import vueDefineOptions from 'unplugin-vue-define-options/vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import * as navbar from './configs/navbar'
import * as sidebar from './configs/sidebar'
import { codeBlockPlugin } from './plugins'

export default defineUserConfig({
  base: '/vlib-starter/',

  pagePatterns: [
    '**/*.md',
    '!.vuepress',
    '!node_modules',
    '../packages/vlib-ui/src/**/*.md',
    '!../packages/**/node_modules',
  ],

  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'vlib-starter',
      description: 'Vue3 组件库开发模板 & Vue3 组件库实践指南',
    },
  },

  bundler: viteBundler({
    viteOptions: {
      // @ts-ignore
      plugins: [vueDefineOptions(), vueJsx()],
    },
    vuePluginOptions: {},
  }),

  theme: defaultTheme({
    logo: '/images/hero.png',

    repo: 'https://github.com/bfehub/vlib-starter',

    locales: {
      '/': {
        navbar: navbar.zh,
        sidebar: sidebar.zh,
        sidebarDepth: 1,
        selectLanguageName: '简体中文',
        selectLanguageText: '选择语言',
        selectLanguageAriaLabel: '选择语言',
      },
    },
  }),

  plugins: [
    // @bfehub/vuepress-plugins
    codeBlockPlugin(),
  ],
})
