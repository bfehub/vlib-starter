import { defineClientConfig } from '@vuepress/client'
import Vant from 'vant'
import VlibUI from '@bfehub/vlib-ui/src'

import 'vant/lib/index.css'
import '@bfehub/vlib-ui/src/index.scss'
import './configs/styles/index.scss'

export default defineClientConfig({
  enhance({ app }) {
    app.use(Vant)
    app.use(VlibUI)
  },
})
