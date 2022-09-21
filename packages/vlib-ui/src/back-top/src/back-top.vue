<template>
  <transition name="van-fade">
    <div
      v-if="visible"
      :class="bem()"
      :style="{
        right: addUnit(props.right),
        bottom: addUnit(props.bottom),
      }"
      @click.stop="handleClick"
    >
      <slot>
        <Button type="primary" icon="back-top" round vlib-back-top />
      </slot>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { ref, shallowRef, onMounted } from 'vue'
import { throttle } from 'lodash-es'
import { Button } from 'vant'
import { useEventListener } from '@vant/use'
import { addUnit, getScrollTop, unitToPx } from 'vant/es/utils'
import { createNamespace } from '../../utils'
import { backTopProps } from './props'

const [_, bem] = createNamespace('back-top')

defineOptions({
  name: 'vlib-back-top',
})

const props = defineProps(backTopProps)
const emit = defineEmits(['click'])

const visible = ref(false)
const target = shallowRef<HTMLElement | Window>(window)

// 回到顶部
const handleClick = (event: MouseEvent) => {
  emit('click', event)

  target.value.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

// 监听滚动
const handleScroll = () => {
  visible.value = getScrollTop(target.value) >= unitToPx(props.visibilityHeight)
}

const throttleScroll = throttle(handleScroll, 200)
useEventListener('scroll', throttleScroll, { target })

// 获取目标元素
onMounted(() => {
  if (props.target) {
    const el = document.querySelector<HTMLElement>(props.target)
    if (!el) {
      throw new Error(`[vlib-ui]target is not existed: ${props.target}`)
    }
    target.value = el
  }
})
</script>
