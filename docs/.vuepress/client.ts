import { defineClientConfig } from '@vuepress/client'
import Vant from 'vant'
import VlibUI from '@vlib/ui/src'

import 'vant/lib/index.css'
import '@vlib/ui/src/index.scss'
import './configs/styles/index.scss'

export default defineClientConfig({
  enhance({ app }) {
    app.use(Vant)
    app.use(VlibUI)
  },
})
