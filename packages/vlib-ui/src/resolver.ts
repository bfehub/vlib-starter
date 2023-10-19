import type {
  ComponentResolver,
  SideEffectsInfo,
} from 'unplugin-vue-components/types'
import { kebabCase } from 'unplugin-vue-components'

const isSSR = Boolean(
  process.env.SSR ||
    process.env.SSG ||
    process.env.VITE_SSR ||
    process.env.VITE_SSG
)

const moduleType = isSSR ? 'lib' : 'es'

export interface VlibResolverOptions {
  /**
   * import style css or scss along with components
   *
   * @default true
   */
  importStyle?: boolean | 'css' | 'scss'
}

function getSideEffects(
  dirName: string,
  options: VlibResolverOptions
): SideEffectsInfo | undefined {
  const { importStyle = true } = options

  if (!importStyle || isSSR) return

  if (importStyle === 'scss') {
    return `@bfehub/vlib-ui/${moduleType}/${dirName}/style/index.scss`
  } else {
    return `@bfehub/vlib-ui/${moduleType}/${dirName}/style/index.css`
  }
}

/**
 * Resolver for Vlib
 *
 * @link https://github.com/bfehub/vlib-starter
 */
export function VlibResolver(
  options: VlibResolverOptions = {}
): ComponentResolver {
  return {
    type: 'component',
    resolve: (name: string) => {
      if (name.startsWith('Vlib')) {
        const partialName = name.slice(4)
        return {
          name: partialName,
          from: `@bfehub/vlib-ui/${moduleType}`,
          sideEffects: getSideEffects(kebabCase(partialName), options),
        }
      }
    },
  }
}
