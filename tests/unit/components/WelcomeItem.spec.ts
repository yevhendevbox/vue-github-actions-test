import { mount } from '@vue/test-utils'
import WelcomeItem from '@/components/WelcomeItem.vue'
import { describe, it, expect } from 'vitest'

describe('WelcomeItem', () => {
  const wrapper = mount(WelcomeItem, {
    slots: {
      default: '<div>Hello world</div>',
      heading: '<h3>Test Heading</h3>'
    }
  })

  it('renders properly', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
  // TODO: refactor this ->
  it('should render slots content properly', () => {
    expect(wrapper.text()).toContain('Hello world')
    expect(wrapper.text()).toContain('Test Heading')
  })
})
