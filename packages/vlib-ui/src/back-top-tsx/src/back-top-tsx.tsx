import {
  defineComponent,
  Transition,
  ref,
  shallowRef,
  onMounted,
  withModifiers,
} from 'vue'
import { throttle } from 'lodash-es'
import { Button } from 'vant'
import { useEventListener } from '@vant/use'
import { addUnit, getScrollTop, unitToPx } from 'vant/es/utils'
import { createNamespace } from '../../utils'
import { backTopTsxProps } from './props'

const [name, bem] = createNamespace('back-top-tsx')

export default defineComponent({
  name,

  props: backTopTsxProps,

  emits: ['click'],

  setup(props, { emit, slots }) {
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
      visible.value =
        getScrollTop(target.value) >= unitToPx(props.visibilityHeight)
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

    return () => (
      <Transition name="van-fade">
        {visible.value ? (
          <div
            class={bem()}
            style={{
              right: addUnit(props.right),
              bottom: addUnit(props.bottom),
            }}
            onClick={withModifiers(handleClick, ['stop'])}
          >
            {slots.default ? (
              slots.default()
            ) : (
              <Button type="primary" icon="back-top" round vlib-back-top-tsx />
            )}
          </div>
        ) : null}
      </Transition>
    )
  },
})
