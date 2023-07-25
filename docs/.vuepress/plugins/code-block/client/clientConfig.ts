import { defineClientConfig } from '@vuepress/client'
import Demo from './components/demo.vue'
import './styles/index.scss'

export default defineClientConfig({
  enhance({ app }) {
    app.component('CodeDemo', Demo)
  },
})
