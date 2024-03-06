import { mount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
import { describe, it, expect } from 'vitest'

const mockProps = {
  msg: 'Hello World'
}

describe('HelloWorld', () => {
  const wrapper = mount(HelloWorld, {
    props: mockProps
  })

  it('should render properly', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('should render msg', () => {
    expect(wrapper.text()).toContain(mockProps.msg)
  })
})
