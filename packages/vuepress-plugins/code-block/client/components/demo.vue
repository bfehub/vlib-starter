<template>
  <div class="code-demo">
    <div class="code-demo-example">
      <ClientOnly>
        <slot>渲染 content 内容</slot>
      </ClientOnly>
    </div>
    <div class="code-demo-content">
      <div class="code-demo-action">
        <span class="code-demo-action-button" @click="handleCopy">
          <Copy v-show="!state.isCopy" />
          <CopySuccess v-show="state.isCopy" />
        </span>
        <span>{{ props.name }}</span>
        <span class="code-demo-action-button" @click="handleExpand">
          <Expand v-show="!state.isExpand" />
          <UnExpand v-show="state.isExpand" />
        </span>
      </div>
      <div
        v-show="state.isExpand"
        class="code-demo-source"
        v-html="decodeURIComponent(props.highlightCode)"
      ></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { useClipboard } from '@vueuse/core'
import Expand from '../icons/Expand.vue'
import UnExpand from '../icons/UnExpand.vue'
import Copy from '../icons/Copy.vue'
import CopySuccess from '../icons/CopySuccess.vue'

const props = defineProps<{
  name: string
  rawCode: string
  highlightCode: string
}>()

/**
 * Code status
 */
const state = reactive({
  active: 0,
  isCopy: false,
  isExpand: false,
})

const handleExpand = () => {
  state.isExpand = !state.isExpand
}

/**
 * Copy raw code
 */
const rawCode = ref('')
const { copy } = useClipboard({ source: rawCode })
const handleCopy = async () => {
  rawCode.value = decodeURIComponent(props.rawCode)

  await copy()

  state.isCopy = true

  setTimeout(() => {
    state.isCopy = false
  }, 1000)
}
</script>
