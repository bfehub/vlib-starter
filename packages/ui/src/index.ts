import type { App } from 'vue'
import { BackTop } from './back-top'
import { BackTopTsx } from './back-top-tsx'

export * from './back-top'
export * from './back-top-tsx'

function install(app: App) {
  const components = [BackTop, BackTopTsx]
  components.forEach((item) => {
    if (item.install!) {
      app.use(item)
    } else if (item.name) {
      app.component(item.name, item)
    }
  })
}

export default {
  install,
}
