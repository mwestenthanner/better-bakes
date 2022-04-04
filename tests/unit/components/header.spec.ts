import { mount } from '@vue/test-utils'
import Header from '../../../src/components/Header.vue'

test('renders header', () => {
  const wrapper = mount(Header)

  expect(wrapper.text().includes("betterbakes")).toBe(true)
})
