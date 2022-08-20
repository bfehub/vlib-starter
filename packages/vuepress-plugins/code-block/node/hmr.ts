import { handlePageChange } from '@vuepress/cli'
import type { App } from '@vuepress/core'
import type { Plugin, HmrContext } from 'vite'

// https://cn.vitejs.dev/guide/api-plugin.html#handlehotupdate
export const vitePageHMR = (app: App): Plugin => {
  return {
    name: '@bfehub/vuepress-plugin-code-block:hmr',
    enforce: 'post',
    async handleHotUpdate(ctx: HmrContext) {
      for (const module of ctx.modules) {
        // 从模块引用方找到 .html.vue 后缀的文件
        for (const importer of module.importers) {
          const file = importer.file
          if (file && file.endsWith('.html.vue')) {
            // 根据生成的页面路径找到原始文件重新渲染
            for (const page of app.pages) {
              if (page.componentFilePath === file) {
                await handlePageChange(app, page.filePath!)
              }
            }
          }
        }
      }
    },
  }
}
