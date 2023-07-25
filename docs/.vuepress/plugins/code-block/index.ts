import { path } from '@vuepress/utils'
import type { Plugin } from '@vuepress/core'
import { resolveHtmlBlock, resolveScriptSetup, vitePageHMR } from './node'

export const codeBlockPlugin = (): Plugin => {
  const store = new Map<string, Map<string, string>>()

  return {
    name: '@bfehub/vuepress-plugin-code-block',

    clientConfigFile: path.resolve(__dirname, './client/clientConfig.ts'),

    extendsMarkdown(md) {
      resolveHtmlBlock(md, store)
    },

    async extendsPage(page) {
      resolveScriptSetup(page, store)
    },

    extendsBundlerOptions(bundlerOptions, app) {
      if (app.options.bundler.name === '@vuepress/bundler-vite') {
        bundlerOptions.viteOptions ??= {}
        bundlerOptions.viteOptions.plugins ??= []
        bundlerOptions.viteOptions.plugins.push(vitePageHMR(app))
      }
    },
  }
}
