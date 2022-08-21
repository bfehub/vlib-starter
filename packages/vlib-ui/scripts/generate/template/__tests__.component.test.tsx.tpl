import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'
import { <%= pascalCaseName %> } from '../index'

describe('<%= pascalCaseName %>', () => {
  test('render', async () => {
    const wrapper = mount(<%= pascalCaseName %>)
    await nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })
})
